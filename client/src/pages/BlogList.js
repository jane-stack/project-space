import React, { useState } from "react";
import BlogCard from "../components/BlogCard";

const BlogList = ({ blogs, setBlogs }) => {
    const [select, setSelect] = useState({});

    // handles delete blog post
    const deleteBlog = deleteBlog => {
        const updatedBlogs = blogs.filter(blog => blog.id !== deleteBlog.id)
        setBlogs(updatedBlogs);
    }

    // handles edit blog post
    const editBlog = newBlog => {
        const updatedBlogs = blogs.map(blog => {
            if(blog.id === newBlog.id) {
                return newBlog;
            } else {
                return blog;
            }
        })
        setBlogs(updatedBlogs);
    }

    // Rendering blog posts
    const blogCards = blogs.map(blog => {
        return (
            <BlogCard
                key={blog.id}
                blog={blog}
                deleteBlog={deleteBlog}
                editBlog={editBlog}
                select={select}
                setSelect={setSelect}
            />
        )
    })

    return (
        <div>
            <h1 className="top-h1">BLOG POSTS</h1>
            <ul className="ul-post">
                { blogCards }
            </ul>
        </div>
    )
}

export default BlogList;