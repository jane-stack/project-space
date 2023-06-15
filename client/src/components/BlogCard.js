import { useContext, useState } from "react";
import { UserContext } from "../context/UserContext";
import BlogEdit from "./BlogEdit";
import CommentList from "./CommentList";

const BlogCard = ({ blog, deleteBlog, editBlog, select, setSelect }) => {
    const { currentUser } = useContext(UserContext);
    const [ isEditing, setIsEditing ] = useState(false);
    const showEditForm = () => setIsEditing(isEditing => !isEditing);
    const [ isCommenting, setIsCommenting ] = useState(false);
    const showCommentForm = () => setIsCommenting(isCommenting => !isCommenting);

    const handleDelete = (id) => {
        fetch(`/blogs/${id}`, {
            method: "DELETE",
    })
    .then(resp => resp.json())
    .then(data => deleteBlog(data))
}

    // Handle edit icon
    const editIcon = () => {
        setSelect(blog);
        return (
            <BlogEdit
                select={select}
                isEditing={isEditing}
                setIsEditing={setIsEditing}
                editBlog={editBlog}
                blog={blog}
            />
        )
    }
 
    return (
        <div className="card">
            <h2>{ blog.title }</h2>
            <h5>{ blog.author?.username }</h5>
            <p>{ blog.content }</p>
            <button className="msg-btn" onClick={showCommentForm}>💬</button>
            { currentUser && currentUser.username === blog.author?.username && (
                <>
                <button className="edit-btn" onClick={showEditForm}>✏️</button>
                <button className="delete-btn" onClick={handleDelete}>✘</button>
                </>
            )}
            { isEditing && editIcon() }
            { isCommenting && <CommentList blog={ blog } /> }
        </div>
    )
}

export default BlogCard;