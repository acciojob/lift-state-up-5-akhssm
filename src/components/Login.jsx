import React, { useState } from "react";

const Login = ({ isLoggedIn, onLogin }) => {
  const [username, setUsername] = useState("");

  if (isLoggedIn) {
    return <h2>You are logged in!</h2>;
  }

  return (
    <div>
      <h2>Login Form</h2>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          onLogin(); 
        }}
      >
        <input
          type="text"
          placeholder="Enter Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
