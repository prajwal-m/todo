import React from "react";
import "./cards.css";
import { useDispatch } from 'react-redux';

const Cards = ({ index, keyValue, taskName, onDragStart, removeTask }) => {
  console.log(index, typeof index);
  const dispatch = useDispatch();
  return (
    <div
      key={keyValue}
      onDragStart={event => onDragStart(event, keyValue)}
      draggable
      className="draggable"
    >
      {taskName}

      <button
        name="removeTask"
        className="close-btn"
       onClick={() => dispatch({type:"REMOVE_TASK",index:index})} 
      >
        x
      </button>
    </div>
  );
};

export default Cards;
