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
    this.setState(state => ({
      toDo: [state.toDo, state.value] }));
    alert(this.state.toDo.length);
    e.preventDefault();
  }

  deleteTask() {

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
        <ToDo deleteTask={this.deleteTask} data={this.state.toDo} />
      </div>
    );
  }
}

class ToDo extends React.Component {

  constructor(props) {
    super(props);
    this.newMethod = this.newMethod.bind(this);
  }

  newMethod() {
    if (!this.props.data.length)
      return false;
    let listItem = this.props.data.map((element,index) => <li key={index}>  {element.text}
      <button> remove from list</button>
    </li>);
    return (<ul>{listItem}</ul>);
  }

  render() {
    return this.newMethod();
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
          add text:
          <textarea value={this.props.value.text} onChange={this.props.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}


export default App;
