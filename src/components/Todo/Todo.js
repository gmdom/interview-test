import { FaEdit, FaTrash } from 'react-icons/fa';
import { useState, useRef, useEffect } from 'react';
import styles from './Todo.module.css';
export default function Todo({ todo, deleteTodo, toggleTodo, updateTodo }) {
  const [isEditing, setIsEditing] = useState(false);
  const [task, setTask] = useState(todo.task);
  const [markAsDelete, setMarkAsDelete] = useState(false);
  const inputRef = useRef(null);

  const handleChange = (e) => {
    setTask(e.target.value);
  };
  const handleDelete = () => {
    setMarkAsDelete(true);
    setTimeout(() => {
      deleteTodo(todo.id);
    }, 200);
  };

  useEffect(() => {
    if (inputRef.current != null) inputRef.current.focus();
  }, [isEditing]);

  return (
    <li
      className={`${styles.todo} ${todo.done ? styles.done : ''} ${
        markAsDelete ? styles.delete : ''
      }`}
      onClick={(e) => {
        toggleTodo(todo.id);
      }}
    >
      {!isEditing ? (
        <>
          <p>{todo.task}</p>
          <div className={styles.buttons}>
            <button
              onClick={(e) => {
                e.stopPropagation();
                setIsEditing(true);
              }}
            >
              <FaEdit />
            </button>
            <button onClick={handleDelete}>
              <FaTrash />
            </button>
          </div>
        </>
      ) : (
        <form className={styles['edit-form']}>
          <input
            ref={inputRef}
            type="text"
            value={task}
            onChange={handleChange}
            onClick={(e) => e.stopPropagation()}
          />
          <button
            type="button"
            className={styles.save}
            onClick={(e) => {
              e.stopPropagation();
              updateTodo(task);
              setIsEditing(false);
            }}
          >
            Save
          </button>
        </form>
      )}
    </li>
  );
}
