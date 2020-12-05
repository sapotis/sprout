import React, { useEffect, useState } from "react";
import GoalForm from "./components/GoalForm";
import Login from "./components/Login";

export default function App() {
  const [goals, setGoals] = useState([]);
  const [userId, setUserId] = useState(null);
  const [goalToEdit, setGoalToEdit] = useState(false);

  const getGoals = () => {
    fetch(`/api/goals/${userId}`)
      .then((res) => res.json())
      .then((data) => {
        Array.isArray(data) && setGoals(data);
      });
  };

  useEffect(() => {
    getGoals();
  }, [userId]);

  const handleGoalSubmit = (goalObj) => {
    const sendObj = { ...goalObj, user_id: userId };

    fetch("/api/goals", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(sendObj),
    }).then(() => {
      getGoals();
    });
  };

  const handleGoalEditSubmit = (goalObj) => {
    const sendObj = { ...goalObj, user_id: userId };

    fetch("/api/goals", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(sendObj),
    }).then(() => {
      setGoalToEdit(false);
      getGoals();
    });
  };

  const handleGoalDelete = (goalId) => {
    fetch("/api/goals", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id: goalId }),
    }).then(() => {
      getGoals();
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
              <th>Goal Desc</th>
              <th>Goal End Date</th>
              <th>Goal User ID</th>
            </tr>
            {goals.map((goal) => (
              <tr key={goal.id}>
                <td>{goal.id}</td>
                <td>{goal.name}</td>
                <td>{goal.description || ""}</td>
                <td>{goal.end_date}</td>
                <td>{goal.user_id}</td>
                <td>
                  <button
                    onClick={() => {
                      setGoalToEdit(goal);
                    }}
                  >
                    Edit
                  </button>
                </td>
                <td>
                  <button
                    onClick={() => {
                      handleGoalDelete(goal.id);
                    }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </table>

          <GoalForm onSubmit={handleGoalSubmit} />

          {goalToEdit && (
            <GoalForm goal={goalToEdit} onSubmit={handleGoalEditSubmit} />
          )}
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
