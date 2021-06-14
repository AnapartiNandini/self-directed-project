import { Route, Switch } from "react-router-dom";
import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./Header";
import Posts from "./Posts";
import Profile from "./Profile";
import Notifications from "./Notifications";
import Post from "./Post";

const App = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(`http://localhost:3000/posts/`);
      const posts = await response.json();
      setPosts(posts);
    }
    fetchData();
  }, []);

  const onCreatePost = async (formData) => {
    const response = await fetch(`http://localhost:3000/posts/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const post = await response.json();

    setPosts((prevPosts) => [...prevPosts, post]);
  };

  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/">
          <ul className="posts">
            {posts.map((post) => (
              <Post
                title={post.title}
                image={post.image}
                description={post.description}
                key={post.id}
              />
            ))}
          </ul>
        </Route>
        <Route exact path="/add-post">
          <Posts
            onCreatePost={(post) => {
              onCreatePost(post);
            }}
          />
        </Route>
        <Route exact path="/profile">
          <Profile />
        </Route>
        <Route exact path="/notifications">
          <Notifications />
        </Route>
      </Switch>
    </>
  );
};

export default App;
