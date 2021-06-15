import { Route, Switch } from "react-router-dom";
import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./Header";
import Posts from "./Posts";
import Profile from "./Profile";
import Notifications from "./Notifications";
import Post from "./Post";
import Login from "./Login";
import Signup from "./Signup";
import EditProfile from "./EditProfile";

const App = () => {
  const [posts, setPosts] = useState([]);
  const [user, setUser] = useState();

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(`http://localhost:5000/posts/`);
      const posts = await response.json();
      setPosts(posts);
    }
    fetchData();
  }, []);

  const onCreatePost = async (formData) => {
    const response = await fetch(`http://localhost:5000/posts/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const post = await response.json();

    setPosts((prevPosts) => [...prevPosts, post]);
  };

  const currentUser = (user) => {
    setUser(user);
  };

  const logout = () => {
    setUser();
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
        <Route exact path="/notifications">
          <Notifications />
        </Route>
        
        <Route exact path="/profile">
          <Profile logout={logout} currentUser={user} />
        </Route>
        <Route exact path="/login">
          <Login currentUser={currentUser}/>
        </Route>
        <Route exact path="/signup">
          <Signup currentUser={currentUser}/>
        </Route>
        <Route exact path="/edit-profile">
          <EditProfile user={user} email={user.email}/>
        </Route>
      </Switch>
    </>
  );
};

export default App;
