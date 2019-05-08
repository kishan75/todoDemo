import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      toDo: [],
      value: {
      }
    };
    this.addTask = this.addTask.bind(this);
    this.deleteTask = this.deleteTask.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  addTask(e) {
    this.setState({
      toDo: this.state.toDo.concat(this.state.value)
    });
    e.preventDefault();
  }

  deleteTask(index) {
    let newArray = this.state.toDo.slice();
    newArray.splice(index, 1);
    this.setState({
      toDo: newArray
    });
  }
  handleChange(e) {
    this.setState({
      value: {
        text: e.target.value,
        date: new Date(),
      }
    });
  }
  render() {
    return (
      <div>
        <AddTask addTask={this.addTask} handleChange={this.handleChange} value={this.state.value} />
        <h1> your todo list</h1>
        <ToDo deleteTask={this.deleteTask} data={this.state.toDo} />
      </div>
    );
  }
}

class ToDo extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ul>
        {this.props.data.map((item, index) => (
          <li key={index}>  {item.date.toDateString()}  
            <br/>
            {item.text}
            <br/>
            <button onClick={() => this.props.deleteTask(index)}> completed </button>
          </li>
        ))}
      </ul>
    );
  }
}

class AddTask extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <form onSubmit={this.props.addTask}>
        <label>
          add your task:
          <textarea value={this.props.value.text} onChange={this.props.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}


export default App;
