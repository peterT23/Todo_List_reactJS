import React from "react";

function TaskItem({ task, setTastStatus, handleRemoveButton }) {
  return (
    <div>
      <li key={task.id} className={task.status ? "done" : ""}>
        <span className="label">{task.title}</span>
        <div className="actions">
          <input
            type="checkbox"
            value={task.status}
            className="btn-action btn-action-done"
            checked={task.status}
            onChange={(e) => setTastStatus(task.id, e.target.checked)}
          />
          <button
            onClick={(e) => {
              handleRemoveButton(task.id);
            }}
            className="btn-action btn-action-delete"
          >
            ✖
          </button>
        </div>
      </li>
    </div>
  );
}

export default TaskItem;
