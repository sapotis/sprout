import React, { useState } from "react";

const Login = (props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleClick = (e) => {
    e.preventDefault();
    /* Switch to actual Auth */
    fetch(`/api/users/user/${username}/${password}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.error) {
          console.log("Error, username or password is incorrect", data.error);
        } else {
          props.onClick(data);
        }
      })
      .catch((e) => {
        console.log("Error could not connect to server", e);
      });
  };

  return (
    <form>
      <input
        type="text"
        placeholder="username"
        onChange={(e) => {
          setUsername(e.currentTarget.value);
        }}
      />
      <input
        type="password"
        placeholder="password"
        onChange={(e) => {
          setPassword(e.currentTarget.value);
        }}
      />
      <button type="submit" onClick={handleClick}>
        Login
      </button>
    </form>
  );
};

export default Login;
