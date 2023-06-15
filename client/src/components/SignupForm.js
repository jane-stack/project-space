import { useContext, useEffect, useState } from "react";
import { ErrorsContext } from "../context/ErrorsContext";
import { UserContext } from "../context/UserContext";
import { useHistory } from "react-router-dom";
import Errors from "../errors/Errors";

const SignupForm = () => {
    const { setErrors } = useContext(ErrorsContext);
    const { signup, login, loggedIn } = useContext(UserContext);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useHistory();

    useEffect(() => {
        if(loggedIn) {
            navigate.push("/blogs")
        }
        return () => {
            setErrors([])
        }
    }, [loggedIn, navigate, setErrors])

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch("/signup", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({username, password})
        })
        .then(resp => resp.json())
        .then(data => {
            if(data.errors) {
                setErrors(data.errors);
            } else {
                signup(data)
                login(data)
                navigate.push("/blogs")
                setUsername("")
                setPassword("")
            }
        })
    }
    
    return (
        <form className="login-form" onSubmit={handleSubmit}>
            <h3>Create an Account with BlogSpace</h3>
            <div>
            Username &nbsp;
            <input
            type="text"
            name="username"
            id="username"
            value={username}
            onChange={ (e) => setUsername(e.target.value) }
            required={true}
            />
            </div>
            <div>
            Password &nbsp;
            <input
            type="password"
            name="password"
            id="password"
            value={password}
            onChange={ (e) => setPassword(e.target.value) }
            required={true}
            />
            </div>
            <button type="submit">Sign me up!</button>
            <Errors />
        </form>
    )
}

export default SignupForm;