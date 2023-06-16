import React, { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import { ErrorsProvider } from "../context/ErrorsContext";
import { UserProvider } from "../context/UserContext";
import { BlogProvider } from "../context/BlogContext";
import Navbar from "../pages/Navbar";
import LoginPage from "../pages/LoginPage";
import BlogList from "../pages/BlogList";
import NewBlogForm from "../pages/NewBlogForm";
import Home from "../pages/Home";
import FriendList from "../pages/FriendList";

function App() {
  const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        fetch("/blogs")
        .then(resp => resp.json())
        .then(setBlogs)
    }, [])

    // handles add new blog posts
    const addBlog = blog => {
      setBlogs([...blogs, blog]);
  }


  return (
      <ErrorsProvider>
        <UserProvider>
          <BlogProvider>
            <Navbar />
              <Switch>
                <Route path="/blogs"><BlogList blogs={blogs} setBlogs={setBlogs} /></Route>
                <Route path="/create"><NewBlogForm addBlog={addBlog} /></Route>
                <Route path="/login"><LoginPage /></Route>
                <Route path="/friends"><FriendList /></Route>
                <Route path="/"><Home /></Route>
              </Switch>
          </BlogProvider>
        </UserProvider>
      </ErrorsProvider>
  );
}

export default App;
