import React, { useState } from "react";
import { Button, TextField, Link as MaterialLink } from "@material-ui/core";
import { Link, useHistory } from "react-router-dom";

function SignUp(props) {
  const history = useHistory();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [error, setError] = useState("");

  const signUp = async (e) => {
    e.preventDefault();

    if (password === passwordConfirmation) {
      const response = await fetch("http://localhost:5000/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const user = await response.json();
      props.currentUser(user);
      history.push("/");
    } else {
      setError("Passwords don't match");
    }
  };

  return (
    <>
      <form style={{ backgroundColor:"#383737", padding: "24px", margin: "24px", borderRadius: "20px", textAlign: "center"}} onSubmit={signUp}>
        <h1>Sign Up</h1>
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
          error={error.length > 0}
          label="password"
          type="password"
          required
          fullWidth
          margin="normal"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
            setError("");
          }}
          style={{WebkitTextFillColor: "#cbb26a"}}
        />
        <TextField
          helperText={error}
          error={error.length > 0}
          label="password-confirm"
          type="password"
          required
          fullWidth
          margin="24px"
          value={passwordConfirmation}
          onChange={(e) => {
            setPasswordConfirmation(e.target.value);
            setError("");
          }}
          style={{WebkitTextFillColor: "#cbb26a"}}
        />
        <Button
          type="submit"
          variant="contained"
          style={{ marginTop: "20px", color: "#1d1c1c", backgroundColor: "#cbb26a"}}
        >
          Sign-Up
        </Button>
        <p>
          Already have an account?{" "}
          <MaterialLink component={Link} to="/login">
            Login
          </MaterialLink>{" "}
          instead!
        </p>
      </form>
    </>
  );
}

export default SignUp;
