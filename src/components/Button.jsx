import React from "react";
import "./form.css";
import {addToDo} from "../actions/";
import { useDispatch } from 'react-redux';

const ButtonComponent = ({ taskData }) => {
  const dispatch = useDispatch();
  return (
      <button
        type="submit"
       onClick={() => dispatch({type:"ADD_TASK",data:taskData})}
      >
        Add
      </button>
  );
};

export default ButtonComponent;
