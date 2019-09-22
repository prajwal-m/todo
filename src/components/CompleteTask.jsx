import React from "react";
import "./completeTask.css";

const CompleteTask = ({ onDragOver, onDrop, completeList }) => {
  return (
    <div
      className="droppable"
      onDragOver={event => onDragOver(event)}
      onDrop={event => onDrop(event, "complete")}
    >
      <span className="task-header">COMPLETED</span>
      {completeList}
    </div>
  );
};

export default CompleteTask;
