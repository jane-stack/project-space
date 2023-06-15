import React, { useContext } from "react";
import { UserContext } from "../context/UserContext";

const CommentCard = ({ comment, content, deleteComment, blog }) => {
    const { currentUser } = useContext(UserContext);
    const { id } = comment;

    const commentDelete = () => {
        fetch(`/blogs/${blog.id}/comments/${id}`, {
            method: "DELETE",
        })
        deleteComment(id)
    }

    return (
        <div>
            <p><strong>{ comment.user.username }: </strong>{ content } 
            { currentUser && currentUser.username === comment.user.username && ( 
            <>
            <button className="delete-btn" onClick={commentDelete}>✘</button>
            </>
            )}
            </p>
        </div>
    )
}

export default CommentCard;