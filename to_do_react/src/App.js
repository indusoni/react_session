import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import InputList from './InputList';


class App extends Component {

  constructor(props) {
    super(props);
    /*this.state = {
      toDoList: []
    }
    
    console.log(props);
    console.log(this.state);*/

    //this.addTodo = this.addTodo.bind(this);
  };


  addTodo() {
    console.log("on click of add App");

  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React To Do List</h2>
        </div>
        <div className="App-intro">
          <InputList  />
        </div>
      </div>
    );
  }
}

export default App;