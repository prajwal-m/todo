import React, { Component } from "react";
import "./ToDoList.css";
import FormField from "./components/Form";
import TaskToDo from "./components/task";
import CompleteTask from "./components/CompleteTask";
import Cards from "./components/cards";
import { connect } from "react-redux";
import { useDispatch } from 'react-redux';
import ButtonComponent  from "./components/Button";

const mapStateToProps = state => ({
  taskArray: state.tasks
});



class ToDoList extends Component {
 
  onDragStart = (event, id) => {
    console.log("dragstart:", id);
    event.dataTransfer.setData("id", id);
    event.currentTarget.style.border = "dashed";
  };

  onDrop = (event, newCategory) => {
    let id = event.dataTransfer.getData("id");
    this.props.dispatch({type:"MOVE_TASK",key:id});
    // dispatch({type:"MOVE_TASK",key:id})
    // let tasks = this.state.tasks.filter(task => {
    //   if (task.key === id) {
    //     task.category = newCategory;
    //   }
    //   return task;
    // });
    // this.setState({
    //   ...this.state,
    //   tasks
    // });
  };

 

  onDragOver = event => {
    event.preventDefault();
  };

  handleChange = ({ target }) => {
    this.setState({ taskData: target.value });
  };

  removeTask(index) {
    console.log(index)
    const tasks = [...this.state.tasks];
    tasks.splice(index, 1);
    this.setState({ tasks });
  }

  addTask() {
    
    // dispatch({type:"ADD_TASK",data:this.state.taskData})
    // var joined = this.state.tasks.concat({
    //   name: this.state.taskData,
    //   category: "todo",
    //   key: Math.random()
    //     .toString(36)
    //     .substring(7)
    // });
    // this.setState({ tasks: joined });

  }

  render() {
    var tasks = {
      todo: [],
      complete: []
    };
    console.log(this.props.taskArray);
    this.props.taskArray.forEach((individualTask, index) => {
      tasks[individualTask.category].push(
        <Cards
          index={index}
          key={individualTask.key}
          keyValue={individualTask.key}
          taskName={individualTask.name}
          onDragStart={this.onDragStart}
          removeTask={this.removeTask.bind(this, index)}
        />
      );
    });
    return (
      <div className="container-drag">
        <FormField
          taskData={this.taskData}
          handleChange={this.handleChange}
          addTask={this.addTask.bind(this)}
        />
        <TaskToDo onDragOver={this.onDragOver} taskList={tasks.todo} />

        <CompleteTask
          onDragOver={this.onDragOver}
          onDrop={this.onDrop}
          completeList={tasks.complete}
        />
      </div>
    );
  }
}

export default connect(mapStateToProps)(ToDoList);