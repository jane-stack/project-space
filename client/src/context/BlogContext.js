import { createContext, useEffect, useState } from "react";

const BlogContext = createContext([]);
const BlogProvider = ({ children }) => {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        fetch('/blogs')
        .then(resp => resp.json())
        .then(data => {
            setBlogs(data)
        })
    }, [])

    const editBlog = newBlog => {
        const updatedBlogs = blogs.map(blog => {
            if(newBlog.id === blog.id) {
                return newBlog
            } else {
                return blog;
            }
        })
        setBlogs(updatedBlogs);
    }

    return <BlogContext.Provider value={{ blogs, editBlog }}>{ children }</BlogContext.Provider>
}

export { BlogContext, BlogProvider }