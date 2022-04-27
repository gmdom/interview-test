import { useState, useRef, useEffect } from 'react';
import styles from './Todo.module.css';
export default function TodoForm({ addTodo }) {
  const [task, setTask] = useState('');
  const inputRef = useRef(null);
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
  useEffect(() => {
    inputRef.current.focus();
  }, []);
  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <input
        ref={inputRef}
        type="text"
        value={task}
        onChange={handleChange}
        placeholder="Add a todo"
      />
      <button className={styles.add}>Add Todo</button>
    </form>
  );
}
