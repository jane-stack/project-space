import { useContext, useEffect, useState } from "react"
import { ErrorsContext } from "../context/ErrorsContext";
import { UserContext } from "../context/UserContext";
import { useHistory } from "react-router-dom";

const CommentForm = ({ blog, addComment }) => {
    const { setErrors } = useContext(ErrorsContext);
    const { loggedIn } = useContext(UserContext);
    const navigate = useHistory();
    const [content, setContent] = useState("");

    useEffect(() => {
        if(!loggedIn) {
            navigate.push('/login')
        }
        return () => {
            setErrors([])
        }
    }, [loggedIn, setContent, navigate, setErrors])

    const handleSubmit = (e) => {
        e.preventDefault();
        const newContent = {
            content: content
        }
        fetch(`/blogs/${blog.id}/comments`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newContent)
        })
        .then(resp => resp.json())
        .then(data => {
            if(data.errors) {
                setErrors(data.errors)
            } else {
                addComment(data)
            }
        });
        setContent("");
    }

    return (
        <form className="post-form" onSubmit={handleSubmit}>
            <input className="comment-input-description" type="text" name="content" placeholder="Write your comment." onChange={(e) => setContent(e.target.value)} value={content} />
            <button type="submit" className="contact-btn">SEND</button>
        </form>
    )
}

export default CommentForm