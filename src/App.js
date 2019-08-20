import React, { Component   } from 'react';
import './App.css';
import Header from './components/layouts/Header';
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';

class App extends Component {
  state = {
    todos: [
      {
        id: 1,
        title: 'Get a job',
        completed: false
      },
      {
        id: 2,
        title: 'Buy Hayley flowers',
        completed: false
      },
      {
        id: 3,
        title: 'Go to meetups',
        completed: false
      },
    ]
  }
// Mark as complete
  markComplete = (id) => {
    this.setState({ todos: this.state.todos.map(todo => {
      if(todo.id === id) {
        todo.completed = !todo.completed
      }
      return todo;
    }) });
  }

// Delete todo
  deleteTodo = (id) => {
    this.setState({todos: [...this.state.todos.filter(todo => todo.id !== id )] })
  }

// Add Todo
  addTodo = (title) => {
    const newTodo = {
      id: 4,
      title,
      completed: false
    }
    this.setState({ todos: [...this.state.todos, newTodo] });
  }

  render() {
  return (
    <div className="App">
      <div className="container">
        <Header />
        <AddTodo addTodo={this.addTodo}/>
        <Todos todos={this.state.todos} markComplete={this.markComplete} deleteTodo={this.deleteTodo}/>
      </div>
    </div>
  )};

}

export default App;
