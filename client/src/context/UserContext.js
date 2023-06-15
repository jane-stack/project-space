import { createContext, useEffect, useState } from "react";

const UserContext = createContext({});

const UserProvider = ({ children }) => {
    const [users, setUsers] = useState([]);
    const [currentUser, setCurrentUser] = useState(null);
    const [loggedIn, setLoggedIn] = useState(false);

    useEffect(() => {
        fetch('/me')
        .then(resp => resp.json())
        .then(data => {
            if(!data.errors) {
                login(data)
            } else {
                
            }
        })
    }, [])

    useEffect(() => {
        if(loggedIn) {
            fetch("/users")
            .then(resp => resp.json())
            .then(data => {
                setUsers(data)
            })
        }
    }, [loggedIn])

    const login = (user) => {
        setCurrentUser(user);
        setLoggedIn(true);
    }

    const logout = () => {
        setCurrentUser(null);
        setLoggedIn(false);
    }

    const signup = (addUser) => {
        setUsers([...users, addUser])
    }

    // useEffect(() => {
    //     fetch('/me')
    //     .then(resp => {
    //         if (resp.ok) {
    //             resp.json().then(data => {
    //                 setUsers(data)
    //                 data.error ? setLoggedIn(false) : setLoggedIn(true)
    //             })
    //         }
    //     })
    // }, [])

    // useEffect(() => {
    //     if(loggedIn) {
    //         fetch("/users")
    //         .then(resp => resp.json())
    //         .then(data => {
    //             setUsers(data)
    //         })
    //     }
    // }, [loggedIn])

    // const login = (user) => {
    //     setUsers(user);
    //     setCurrentUser(user);
    //     setLoggedIn(true);
    // }

    // const logout = (user) => {
    //     setUsers({});
    //     setCurrentUser(null);
    //     setLoggedIn(false);
    // }

    // const signup = (addUser) => {
    //     setUsers([...users, addUser])
    // }


    return (
        <UserContext.Provider value={{ users, login, logout, signup, loggedIn, currentUser }}>{children}</UserContext.Provider>
    )

}

export { UserContext, UserProvider }