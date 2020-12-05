import React, { useState } from "react";
import Goal from "./components/Goal";
import Login from "./components/Login";

export default function App() {
  const [userId, setUserId] = useState(null);

  return (
    <>
      {userId ? (
        <Goal userId={userId} />
      ) : (
        <Login
          onClick={(userid) => {
            console.log("User id", userid);
            setUserId(userid);
          }}
        />
      )}
    </>
  );
}
