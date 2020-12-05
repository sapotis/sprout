import React, { useState } from "react";

export default GoalCard = ({ name, description, end_date, completed }) => {
  return (
    <div className="goal-card">
      <h5 className="name">{name}</h5>
      {description && <p className="description">{description}</p>}
      <p className="end-date">{end_date}</p>
      <input className="completed" type="checkbox" isChecked={completed} />
    </div>
  );
};
