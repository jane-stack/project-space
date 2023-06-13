import { createContext, useEffect, useState } from "react";

const UserContext = createContext({});

const UserProvider = ({ children, setLoading }) => {
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
                setLoading(false);
            }
        })
    }, [setLoading])

    useEffect(() => {
        if(loggedIn) {
            fetch("/users")
            .then(resp => resp.json())
            .then(data => {
                setUser(data)
                setLoading(false);
            })
        }
    }, [loggedIn, setLoading])

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


    return (
        <UserContext.Provider value={{ users, login, logout, signup, loggedIn, currentUser }}>
            {children}
        </UserContext.Provider>
    )

}

export { UserContext, UserProvider }