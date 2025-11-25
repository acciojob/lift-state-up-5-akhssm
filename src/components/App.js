import React, { useState } from "react";
import "./../styles/App.css";
import Login from "./Login";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true); 
  };

  return (
    <div id="main">
      {/* Do not remove the main div */}

      <h1>Parent Component</h1>
      <Login isLoggedIn={isLoggedIn} onLogin={handleLogin} />
    </div>
  );
};

export default App;
