import React, { useState } from "react";
import "./App.css";
import Header from "./component/Header";
import TaskList from "./component/TaskList";
import TaskForm from "./component/TaskForm";

function App() {
  const [tasks, setTasks] = useState([
    { id: "task_1", title: "Learn JS", status: false },
    { id: "task_2", title: "Code a todo List", status: false },
  ]);
  const [showincomplete, setShowincomplete] = useState(false);

  const [newtask, setNewtask] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (newtask) {
      const task = { id: Date.now(), title: newtask, status: 0 };
      setTasks([...tasks, task]);
      setNewtask("");
    }
  };

  const handleInputChange = (e) => {
    setNewtask(e.target.value);
  };

  const setTastStatus = (taskId, status) => {
    setTasks(
      tasks.map((task) => {
        if (task.id === taskId) {
          return { ...task, status };
        }
        return task;
      })
    );
  };
  const handleRemoveButton = (taskID) => {
    setTasks(tasks.filter((task) => task.id !== taskID));
  };
  return (
    <div>
      <div className="container">
        <Header></Header>
        <TaskList
          showincomplete={showincomplete}
          handleRemoveButton={handleRemoveButton}
          setTastStatus={setTastStatus}
          tasks={tasks}
          setShowincomplete={setShowincomplete}
        ></TaskList>

        <TaskForm
          handleSubmit={handleSubmit}
          newtask={newtask}
          handleInputChange={handleInputChange}
        />
      </div>
    </div>
  );
}

export default App;
