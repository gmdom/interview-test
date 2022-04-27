import { useEffect, useReducer } from 'react';
import './App.css';
import TodoForm from './components/TodoForm/TodoForm';
import TodoList from './components/TodoList/TodoList';
import Todo from './components/Todo/Todo';
import reducer from './reducer';

const initialState = [];

function App() {
  const [todos, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="App">
      <h1>Todo List</h1>
      <TodoForm addTodo={(task) => dispatch({ type: 'ADDED', task })} />
      <TodoList>
        {todos.map((todo) => (
          <Todo
            key={todo.id}
            todo={todo}
            toggleTodo={() => dispatch({ type: 'TOGGLE', id: todo.id })}
            deleteTodo={() => dispatch({ type: 'DELETED', id: todo.id })}
            updateTodo={(task) =>
              dispatch({ type: 'UPDATED', id: todo.id, task })
            }
          />
        ))}
      </TodoList>
    </div>
  );
}

export default App;
