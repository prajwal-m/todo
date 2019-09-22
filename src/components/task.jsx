import React from "react";
import "./task.css";

const TaskToDo = ({ onDragOver, taskList }) => {
  console.log(taskList);
  return (
    <div className="todo" onDragOver={event => onDragOver(event)}>
      <span className="task-header">TO DO</span>
      {taskList}
    </div>
  );
};

export default TaskToDo;
