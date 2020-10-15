import React, { useEffect, useState } from "react";
import GoalForm from "./components/GoalForm";

export default function App() {
  const [users, setUsers] = useState([]);
  const [goals, setGoals] = useState([]);

  useEffect(() => {
    fetch("/api/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));

    fetch("/api/goals")
      .then((res) => res.json())
      .then((data) => setGoals(data));
  }, []);

  const getUserId = () => {
    /* For grabbing the user_id **once authentication is in place */
    return 1; // Default for now
  };

  const handleGoalSubmit = (goalObj) => {
    const sendObj = { ...goalObj, user_id: getUserId() };

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
      <h2>Homepage rendered</h2>

      <h3>Users</h3>
      <table>
        <tr>
          <th>User Id</th>
          <th>User Name</th>
        </tr>
        {users.map((user) => (
          <tr key={user.id}>
            <td>{user.id}</td>
            <td>{user.username}</td>
          </tr>
        ))}
      </table>

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
  );
}
