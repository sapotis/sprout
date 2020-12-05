// eifj;oij

export const getGoalsAPI = async (userId) => {
  const goalsJson = await fetch(`/api/goals/${userId}`);
  const goals = await goalsJson.json();
  return Array.isArray(goals) ? goals : [];
};

export const addGoalAPI = async (goalObj, userId) => {
  const sendObj = { ...goalObj, user_id: userId };
  const res = await fetch("/api/goals", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(sendObj),
  });
};
export const updateGoalAPI = async (goalObj, userId) => {
  const sendObj = { ...goalObj, user_id: userId };
  const res = fetch("/api/goals", {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(sendObj),
  });
};

export const deleteGoalAPI = async (goalId) => {
  const res = await fetch("/api/goals", {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ id: goalId }),
  });
};
