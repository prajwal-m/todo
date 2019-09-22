import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from "react-redux";
import { createStore } from "redux";



const initialState = {
  tasks : []
};
function reducer(state = initialState, action) {
  switch (action.type) {
    case "ADD_TASK":
      const inputData = document.querySelector(".input-field").value;
      console.log(inputData);
        return Object.assign({}, state, { tasks: [...state.tasks,  {name: inputData,
      category: "todo",
      key: Math.random()
        .toString(36)
        .substring(7)}] });

    case "REMOVE_TASK":
      const index = action.index;      
      return {
        ...state,
        tasks: [...state.tasks.slice(0, index), ...state.tasks.slice(index + 1)]
      }

    case 'MOVE_TASK':  
     const list = [...state.tasks];
     console.log(list);
     const getIndex = list.findIndex(i => i.key === action.key)
     console.log(getIndex);
     const newObj = {name:list[getIndex].name, category:"completed", key:action.key};
     console.log(newObj);
      return {
        ...state,
        tasks: [...state.tasks.slice(0, getIndex), ...state.tasks.slice(getIndex + 1), {name:list[getIndex].name, category:"complete", key:action.key}]
      }

    default:
      return state;
  }
}
const store = createStore(reducer, {tasks: [
   {name: "hello",
      category: "todo",
      key: Math.random()
        .toString(36)
        .substring(7)},
 ]}, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.render(<Provider store={store}>
    <App />
  </Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
