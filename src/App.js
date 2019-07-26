import React, { Component } from 'react';
import CreateTodo from './components/todos/CreateTodo'
import TodosContainer from './components/todos/TodosContainer'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h4>CreateToDo: </h4>
        <CreateTodo />
        <hr/>
        <h4>ToDo List: </h4>
        <TodosContainer />
      </div>
    );
  }
}

export default App;
