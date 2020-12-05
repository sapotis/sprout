import React, { useState } from "react";
import "../styles/GoalForm.css";

const GoalForm = ({ onSubmit, goal }) => {
  const currDate = new Date();
  /* State Names exactly match the field names in the backend */
  const [id, setId] = useState(goal ? goal.id : null);
  const [name, setName] = useState(goal ? goal.name : "");
  const [end_date, setEndDate] = useState(
    goal ? new Date(goal.end_date) : currDate
  );
  const [description, setDescription] = useState(
    goal ? goal.description : null
  );
  const [category, setCategory] = useState(goal ? goal.category : null);
  const [completed, setCompleted] = useState(goal ? goal.completed : null);
  const [frequency, setFrequency] = useState(goal ? goal.frequency : null);
  const [parent_goal, setParent_goal] = useState(
    goal ? goal.parent_goal : null
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    let goalObject = {
      name,
      end_date,
      description,
      category,
      completed,
      frequency,
      parent_goal,
    };
    if (id) {
      goalObject = { ...goalObject, id };
    }
    onSubmit && onSubmit(goalObject);
  };

  return (
    <form onSubmit={handleSubmit}>
      <fieldset>
        <input
          type="text"
          onChange={({ currentTarget: { value } }) => {
            setName(value);
          }}
          placeholder="Title"
          defaultValue={name}
          required
        />

        {/* datetime-local isn't supported in safari */}
        <input
          type="datetime-local"
          onChange={({ currentTarget: { value } }) => {
            setEndDate(value);
          }}
          placeholder="End Date"
          size={100}
          defaultValue={end_date}
          required
        />

        <textarea
          type="text"
          onChange={({ currentTarget: { value } }) => {
            setDescription(value);
          }}
          defaultValue={description}
          placeholder="Description"
        ></textarea>

        <input
          type="text"
          onChange={({ currentTarget: { value } }) => {
            setCategory(value);
          }}
          defaultValue={category}
          placeholder="Category"
        />

        <input
          type="text"
          onChange={({ currentTarget: { value } }) => {
            setFrequency(value);
          }}
          defaultValue={frequency}
          placeholder="Frequency"
        />

        <button type="submit">{goal ? "Update Goal" : "Add Goal"}</button>
      </fieldset>
    </form>
  );
};

export default GoalForm;
