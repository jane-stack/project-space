import { useContext, useEffect, useState } from "react";
import { ErrorsContext } from "../context/ErrorsContext";
import { UserContext } from "../context/UserContext";
import { useHistory } from "react-router-dom";

const NewBlogForm = ({ addBlog }) => {
    const { setErrors } = useContext(ErrorsContext);
    const { loggedIn } = useContext(UserContext);
    const navigate = useHistory();
    const initialStatie = {
        title: "",
        content: ""
    }
    const [formData, setFormData] = useState(initialStatie);

    useEffect(() => {
        if(!loggedIn) {
            navigate.push('/login')
        }
        return () => {
            setErrors([])
        }
    }, [loggedIn, navigate, setErrors])

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch('/blogs', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formData)
        })
        .then(resp => resp.json())
        .then(data => {
            if(data.errors) {
                setErrors(data.errors)
            } else {
                addBlog(data)
                navigate.push('/blogs');
            }
        });
    }

    return (
        <form className="post-form" onSubmit={handleSubmit}>
            <h2>Write A New Post</h2>
            <div className="newpost">
            Title &nbsp;
            <input className="post-input" type="text" name="title" id="title" value={ formData.title } onChange={ handleChange }/>
            <textarea className="post-input-description" type="textbox" name="content" id="content" value={ formData.content } onChange={ handleChange }/>
            <br />
            <button type="submit" className="contact-btn">POST</button>
            </div>
        </form>
    )
}

export default NewBlogForm;