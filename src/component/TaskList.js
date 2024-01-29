import React from "react";
import TaskItem from "./TaskItem";

function TaskList({
  tasks,
  showincomplete,
  setTastStatus,
  handleRemoveButton,
  setShowincomplete,
}) {
  return (
    <div>
      <ul className="task-list">
        {tasks
          .filter((task) => (showincomplete ? task.status !== true : true))
          .map((task) => (
            <TaskItem
              key={task.id}
              task={task}
              setTastStatus={setTastStatus}
              handleRemoveButton={handleRemoveButton}
            />
          ))}
        {/* <li>
            <span className="label">Code a todo list</span>
            <div className="actions">
              <input type="checkbox" className="btn-action btn-action-done" />
              <button className="btn-action btn-action-delete">✖</button>
            </div>
          </li> */}
      </ul>
      <div className="filter-wrapper">
        <label htmlFor="filter" className="filter-label">
          Show incompleted tasks only
        </label>
        <input
          type="checkbox"
          id="filter"
          name="filter"
          // checked={showincomplete} //taisao cho nay de gia tri la showincompete
          onChange={(e) => {
            setShowincomplete(e.target.checked); //trong khi do cho nay checked la gia tri nguoi dung tich chon
          }}
        />
      </div>
    </div>
  );
}

export default TaskList;
