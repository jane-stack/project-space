import React, { useEffect, useState } from "react";

const BlogEdit = ({ blog, select, isEditing, setIsEditing, editBlog }) => {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const closeEditForm = () => setIsEditing(!isEditing);

    useEffect(() => {
        setTitle(select.title);
        setContent(select.content);
    },[select])

    const handleSubmit = (e) => {
        e.preventDefault();
        const editedPost = {
            title: title,
            content: content
        }
        fetch(`/blogs/${blog.id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/jon"
            },
            body: JSON.stringify(editedPost)
        })
        .then(resp => resp.json())
        .then(data => {
            editBlog(data)
        })

        // refresh input after submitting form
        closeEditForm();
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="newpost">
            Title &nbsp;
            <input 
            className="post-input" 
            type="text" 
            name="title" 
            value={ title } 
            onChange={ (e) => setTitle(e.target.value) }/>
            <textarea 
            className="post-input-description" 
            type="textbox" 
            name="content"
            value={ content } 
            onChange={ (e) => setContent(e.target.value) }/>
            <br />
            <button 
            type="submit" 
            className="contact-btn">UPDATE</button>
            </div>
        </form>
    )
}

export default BlogEdit;