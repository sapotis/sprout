import React, { useState, useEffect } from "react";
import Goals from "./components/Goals";
import Login from "./components/Login";
import {
  addGoalAPI,
  getGoalsAPI,
  updateGoalAPI,
  deleteGoalAPI,
} from "./components/utils";
import GoalForm from "./components/GoalForm";

export default function App() {
  const [userId, setUserId] = useState(1);
  const [goals, setGoals] = useState([]);

  useEffect(() => {
    userId && getGoals();
  }, [userId]);

  const getGoals = async () => {
    const data = await getGoalsAPI(userId);
    setGoals(data);
  };

  const handleGoalSubmit = async (goalObj) => {
    const res = await addGoalAPI(goalObj, userId);
    getGoals();
  };

  const handleGoalEditSubmit = async (goalObj) => {
    const res = await updateGoalAPI(goalObj, userId);
    getGoals();
  };

  const handleGoalDelete = async (goalId) => {
    await deleteGoalAPI(goalId); // TODO: Restrict delete goals to user
    getGoals();
  };

  return (
    <>
      {userId ? (
        <>
          <Goals
            goals={goals}
            handleGoalEditSubmit={handleGoalEditSubmit}
            handleGoalDelete={handleGoalDelete}
          />
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
