import React, { useEffect, useState } from "react";
import GoalForm from "./components/GoalForm";
import Login from "./components/Login";

export default function App() {
  const [goals, setGoals] = useState([]);
  const [userId, setUserId] = useState(1);

  useEffect(() => {
    fetch(`/api/goals/${userId}`)
      .then((res) => res.json())
      .then((data) => setGoals(data));
  }, []);

  const handleGoalSubmit = (goalObj) => {
    const sendObj = { ...goalObj, user_id: userId };

    fetch("/api/goals", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(sendObj),
    });
  };

  return (
    <>
      {userId ? (
        <>
          <h3>Goals</h3>
          <table>
            <tr>
              <th>Goal Id</th>
              <th>Goal Name</th>
              <th>Goal End Date</th>
              <th>Goal User ID</th>
            </tr>
            {goals.map((goal) => (
              <tr key={goal.id}>
                <td>{goal.id}</td>
                <td>{goal.name}</td>
                <td>{goal.end_date}</td>
                <td>{goal.user_id}</td>
              </tr>
            ))}
          </table>

          <GoalForm onSubmit={handleGoalSubmit} />
        </>
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
