import React from "react";
import "./form.css";
import {addToDo} from "../actions/";
import { useDispatch } from 'react-redux';


const handleSubmit = event => {
  event.preventDefault();
  const inputField = document.querySelector(".header");
  inputField.reset();
};

const FormField = ({ taskData, handleChange, addTask }) => {
  const dispatch = useDispatch();
 
  return (
    <form onSubmit={handleSubmit} className="header">
      <input className="input-field" name="taskData" value={taskData} onChange={handleChange} />
      <button
        type="submit"
       onClick={() => dispatch({type:"ADD_TASK",})}
      >
        Add
      </button>
    </form>
  );
};

export default FormField;
