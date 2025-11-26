import React, { useState } from "react";

const Login = ({ isLoggedIn, onLogin }) => {
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");

  if (isLoggedIn) {
    return <p>You are logged in!</p>;
  }

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          onLogin();  // no username required
        }}
      >
        <label>Username:</label>
        <input
          type="text"
          value={user}
          onChange={(e) => setUser(e.target.value)}
        />

        <label>Password:</label>
        <input
          type="password"
          value={pass}
          onChange={(e) => setPass(e.target.value)}
        />

        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
