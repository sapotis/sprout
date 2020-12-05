import React, { useState, useEffect } from "react";
import GoalForm from "./GoalForm";
import { deleteGoalAPI, getGoalsAPI, updateGoalAPI } from "./utils";

const Goals = ({ goals, handleGoalEditSubmit, handleGoalDelete }) => {
  const [goalToEdit, setGoalToEdit] = useState(false);

  const handleSubmit = async (goalObj) => {
    handleGoalEditSubmit(goalObj);
    setGoalToEdit(false);
  };

  return (
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

      {goalToEdit && <GoalForm goal={goalToEdit} onSubmit={handleSubmit} />}
    </>
  );
};

export default Goals;
