import { useState } from "react";
import LoginForm from "../components/LoginForm";
import SignupForm from "../components/SignupForm";

const LoginPage = () => {
    const [showLogin, setShowLogin] = useState(true);

    return (
        <div>
            {showLogin ? (
                <>
                <LoginForm />
                <p>Join BlogSpace? &nbsp;
                    <button onClick={() => setShowLogin(false)}>Sign Up</button>
                </p>
                </>
            ):(
                <>
                <SignupForm/>
                <p>Already a member? &nbsp;
                    <button onClick={() => setShowLogin(true)}>Log In</button>
                </p>
                </>
            )}
        </div>
    )
}

export default LoginPage;