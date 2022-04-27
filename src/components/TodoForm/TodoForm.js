import { useState, useRef, useEffect } from 'react';
export default function TodoForm({ addTodo }) {
  const [task, setTask] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    if (task) {
      addTodo(task);
      setTask('');
    }
  };
  const handleChange = (e) => {
    setTask(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={task}
        onChange={handleChange}
        placeholder="Add a todo"
      />
      <button>Add Todo</button>
    </form>
  );
}
