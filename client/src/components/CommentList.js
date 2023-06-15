import React, { useEffect, useState } from "react";
import CommentCard from "./CommentCard";
import CommentForm from "./CommentForm";


const CommentList = ({ blog }) => {
    const [comments, setComments] = useState([]);
    const { id } = blog;

    useEffect(() => {
        fetch(`/blogs/${id}/comments`)
        .then(resp => resp.json())
        .then(data => {
            setComments(data)
        });
    }, [id]);

    // Handle add comments
    const addComment = newComment => {
        setComments([...comments, newComment])
    }

    // Handles delete comments
    const deleteComment = (id) => {
        const updatedComments = comments.filter(comment => comment.id !== id);
        setComments(updatedComments);
    }

    // Rendering comments
    const renderComments = comments.map(comment => {
        return (
            <CommentCard
                key={comment.id}
                content={comment.content}
                comment={comment}
                deleteComment={deleteComment}
                blog={blog}
            />
        )
    })

    return (
        <div>
            <CommentForm
                addComment={addComment}
                blog={blog}
            />
            <p>Comments: </p>
            { renderComments }
        </div>
    )

}

export default CommentList;