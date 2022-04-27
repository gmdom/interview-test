import { useReducer, useEffect } from 'react';
import './App.css';
import TodoForm from './components/TodoForm/TodoForm';
import TodoList from './components/TodoList/TodoList';
import Todo from './components/Todo/Todo';
import reducer from './reducer';

const initialState = JSON.parse(localStorage.getItem('todolist')) || [];

function App() {
  const [todos, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    localStorage.setItem('todolist', JSON.stringify(todos));
  }, [todos]);
  return (
    <div className="App">
      <h1>Todo List</h1>
      <h5>Simple todo list made by Rafael García</h5>
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
