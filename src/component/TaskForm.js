import React from "react";

function TaskForm({ handleSubmit, newtask, handleInputChange }) {
  return (
    <div>
      <form action="#" className="form" onSubmit={handleSubmit}>
        <label htmlFor="newitem">Add to the todo lists</label>
        <input
          type="text"
          id="newitem"
          value={newtask}
          onChange={handleInputChange}
        />
        <button type="submit">Add item</button>
      </form>
    </div>
  );
}

export default TaskForm;
