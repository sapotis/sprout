import React, { useEffect, useState } from "react";

export default function App() {
  const currDate = new Date();
  const [users, setUsers] = useState([]);
  const [goals, setGoals] = useState([]);
  const [name, setGoalName] = useState("");
  const [end_date, setGoalEndDate] = useState(currDate);
  const userId = 1;

  useEffect(() => {
    fetch("/api/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));

    fetch("/api/goals")
      .then((res) => res.json())
      .then((data) => setGoals(data));
  }, []);

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

      <form
        action=""
        onSubmit={(e) => {
          console.log("app clie", name, end_date, userId);
          /* Add goal to db table goals*/
          e.preventDefault();
          fetch("/api/goals", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              name: name,
              end_date: end_date,
              user_id: userId,
            }),
          });
        }}
      >
        <fieldset>
          <input
            type="text"
            onChange={({ currentTarget: { value } }) => {
              setGoalName(value);
            }}
            placeholder="Goal Name"
          />
          <input
            type="text"
            onChange={({ currentTarget: { value } }) => {
              setGoalEndDate(value);
            }}
            placeholder="Goal End Date"
            defaultValue={`${currDate}`}
            size={100}
          />
          <button type="submit">Add Goal</button>
        </fieldset>
      </form>
    </>
  );
}
