import { useEffect, useReducer } from 'react';
import './App.css';
import TodoForm from './components/TodoForm/TodoForm';
import reducer from './reducer';

const initialState = [];

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="App">
      <h1>Todo List</h1>
      <TodoForm addTodo={(task) => dispatch({ type: 'ADDED', task })} />
    </div>
  );
}

export default App;
