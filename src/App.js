import React, { Component   } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Header from './components/layouts/Header';
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';
import About from './components/pages/About';
import uuid from 'uuid';
import axios from 'axios';

import './App.css';


class App extends Component {
  state = {
    todos: []
  }

  componentDidMount() {
    axios.get('https://jsonplaceholder.typicode.com/todos?_limit=20')
      .then(res => this.setState({ todos: res.data }))
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

// Delete todo - always use back ticks when deleting from backend server
// Returns a promise (.then) with which we tell it what to do - deletes it on server .then updates user interface

  deleteTodo = (id) => {
    axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
      .then(res => this.setState({todos: [...this.state.todos.filter(todo => todo.id !== id )] }));
  }

// Add Todo
  addTodo = (title) => {
    axios.post('https://jsonplaceholder.typicode.com/todos', {
      title,
      completed: false
    })
      .then(res => this.setState({ todos: [...this.state.todos, res.data] }));
  }

  render() {
  return (
    // Exact path for '/' ensures that we don't see both homepage and about page rendered when we go to about, without exact it shows us anything with '/'
    <Router>
      <div className="App">
        <div className="container">
          <Header />
          <Route exact path='/' render={props => (
            <React.Fragment>
              <AddTodo addTodo={this.addTodo}/>
              <Todos todos={this.state.todos} markComplete={this.markComplete} deleteTodo={this.deleteTodo}/>
            </React.Fragment>
          )} />
          <Route path='/about' component={About} />
        </div>
      </div>
    </Router>
  )};

}

export default App;
