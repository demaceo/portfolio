import React, { Component } from "react";
import "./Tasks.css";

class Tasks extends Component {
  constructor() {
    super();
    this.state = {
      tasks: [],
      value: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.addTask = this.addTask.bind(this);
    this.removeTask = this.removeTask.bind(this);
    this.updateHelp = this.updateHelp.bind(this);

    this.form = document.querySelector("#taskForm");
    this.input = document.querySelector("#taskInput");
    this.help = document.querySelector("#taskHelp");
    this.ul = document.querySelector("#taskul");
    this.items = {}; 

    // if(localStorage.getItem("tasks")){
    //   let storedTasks = JSON.parse(localStorage.getItem("tasks"))
    //   console.log(storedTasks);
    //   this.state.tasks = storedTasks;
    //   console.log(this.state.tasks)
    // }
  }

  handleChange = (e) => {
    this.setState({ value: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const task = this.state.value;
    this.addTask(task);
    const taskText = document.querySelector("#taskInput");
    taskText.value = "";
  };

  handleDelete = (e) => {
    e.preventDefault();
    const id = e.target.getAttribute("data-delete-id");
    if (!id) return;
    this.removeTask(id);
  };

  addTask = (task) => {
    const id = String(Date.now());
    this.state.tasks = this.state.tasks.concat({ task, id });
    // localStorage.setItem("tasks", JSON.stringify(this.state.tasks));
    this.updateHelp();
    const ul = document.querySelector("#taskul");
    const li = document.createElement("li");
    const span = document.createElement("span");
    const del = document.createElement("a");
    span.innerText = task;
    del.innerText = "X";
    del.setAttribute("data-delete-id", id);
    ul.appendChild(li);
    li.appendChild(span);
    li.appendChild(del);
    this.items[id] = li;
  };

  removeTask = (id) => {
    const ul = document.querySelector("#taskul");
    this.state.tasks = this.state.tasks.filter((item) => item.id !== id);
    this.updateHelp();
    const li = this.items[id];
    ul.removeChild(li);
  };

  updateHelp = () => {
    if (this.state.tasks.length > 0) {
      document.querySelector(".help").classList.add("hidden");
    } else {
      document.querySelector(".help").classList.remove("hidden");
    }
  };

  render() {
    return (
      <div id="taskList">
        <form id="taskForm" onSubmit={this.handleSubmit}>
          <input
            id="taskInput"
            type="text"
            value={this.state.value}
            onChange={this.handleChange}
          />
          <p className="help" id="taskHelp">
            Type in a task and then hit 'Enter'.
          </p>
          <ul id="taskul" onClick={this.handleDelete}></ul>
        </form>
      </div>
    );
  }
}

export default Tasks;
