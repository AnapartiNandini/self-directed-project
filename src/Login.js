import React, { useState } from "react";
import { Button, TextField, Link as MaterialLink } from "@material-ui/core";
import { Link, useHistory } from "react-router-dom";
import { Alert, AlertTitle } from "@material-ui/lab";
import bcrypt from "bcryptjs";

function Login(props) {
  const history = useHistory();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const login = async (e) => {
    e.preventDefault();

    const response = await fetch(`http://localhost:5000/users?email=${email}`);
    const users = await response.json();

    if (users.length > 0 && users[0].password === password) {
      props.currentUser(users[0]);
      history.push("/");
    } else {
      setError("Either the username or password don't match");
    }
  };

  return (
    <>
      <form style={{ backgroundColor:"#383737", padding: "24px", margin: "24px", borderRadius: "20px", textAlign: "center"}} onSubmit={login}>
        <h1>Login</h1>
        {error.length > 0 && (
          <Alert severity="error">
            <AlertTitle>Error</AlertTitle>
            {error}
          </Alert>
        )}
        <TextField
          label="email"
          type="email"
          required
          fullWidth
          margin="normal"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{WebkitTextFillColor: "#cbb26a"}}
        />
        <TextField
          label="password"
          type="password"
          required
          fullWidth
          margin="normal"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{WebkitTextFillColor: "#cbb26a"}}
        />
        <Button
          type="submit"
          variant="contained"
          style={{ marginTop: "20px", color: "#1d1c1c", backgroundColor: "#cbb26a"}}
        >
          Login
        </Button>
        <p>
          Don't have an account?{" "}
          <MaterialLink component={Link} to="/signup">
            Sign-up
          </MaterialLink>{" "}
          instead!
        </p>
      </form>
    </>
  );
}

export default Login;
