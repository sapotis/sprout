import React, { useState } from "react";
import "../styles/GoalForm.css";

const GoalForm = ({ onSubmit }) => {
  const currDate = new Date();
  /* State Names exactly match the field names in the backend */
  const [name, setName] = useState("");
  const [end_date, setEndDate] = useState(currDate);
  const [description, setDescription] = useState(null);
  const [category, setCategory] = useState(null);
  const [completed, setCompleted] = useState(null);
  const [frequency, setFrequency] = useState(null);
  const [parent_goal, setParent_goal] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit &&
      onSubmit({
        name,
        end_date,
        description,
        category,
        completed,
        frequency,
        parent_goal,
      });
  };

  return (
    <form action="" onSubmit={handleSubmit}>
      <fieldset>
        <input
          type="text"
          onChange={({ currentTarget: { value } }) => {
            setName(value);
          }}
          placeholder="Title"
          required
        />

        <input
          type="text"
          onChange={({ currentTarget: { value } }) => {
            setEndDate(value);
          }}
          placeholder="End Date"
          defaultValue={`${currDate}`}
          size={100}
          required
        />

        <textarea
          type="text"
          onChange={({ currentTarget: { value } }) => {
            setDescription(value);
          }}
          placeholder="Description"
        ></textarea>

        <input
          type="text"
          onChange={({ currentTarget: { value } }) => {
            setCategory(value);
          }}
          placeholder="Category"
        />

        <input
          type="text"
          onChange={({ currentTarget: { value } }) => {
            setFrequency(value);
          }}
          placeholder="Frequency"
        />

        <button type="submit">Add Goal</button>
      </fieldset>
    </form>
  );
};

export default GoalForm;
