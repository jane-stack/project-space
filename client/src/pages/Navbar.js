import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import { NavLink, useHistory } from "react-router-dom";

const linkStyle = {
    display: "inline-block",
    width: "auto",
    padding: "12px",
    margin: "0 6px 6px",
    background: "#385949",
    textDecoration: "none",
    color: "white",
  };

const Navbar = () => {
    const { logout, loggedIn } = useContext(UserContext);
    const navigate = useHistory();

    const handleLogout = () => {
        fetch('/logout', {
            method: "DELETE"
        })
        logout()
        navigate.push('/')
    }

    const ifLoggedIn = () => {
        return (
            <>
            <NavLink to="/blogs" exact style={linkStyle}>Blogs</NavLink>
            <NavLink to="/create" exact style={linkStyle}>Create Blog</NavLink>
            <NavLink to="/friends" exact style={linkStyle}>Friends</NavLink>
            <NavLink to="#" onClick={handleLogout} exact style={linkStyle}>Logout</NavLink>
            </>
        )
    }

    const ifLoggedOut = () => {
        return (
            <>
            <NavLink to="/login" exact style={linkStyle}>Login</NavLink>
            </>
        )
    }

    return (
        <div className="navbar">
            <h1>BLOG SPACE</h1>
            <NavLink to="/" exact style={linkStyle}>Home</NavLink>
            { loggedIn ? ifLoggedIn() : ifLoggedOut() }
        </div>
    )
}

export default Navbar;