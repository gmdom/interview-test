import { FaEdit, FaTrash } from 'react-icons/fa';
import { useState } from 'react';
export default function Todo({ todo, deleteTodo, toggleTodo, updateTodo }) {
  const [isEditing, setIsEditing] = useState(false);
  const [task, setTask] = useState(todo.task);

  const handleChange = (e) => {
    setTask(e.target.value);
  };
  const handleDelete = () => {
    deleteTodo(todo.id);
  };

  return (
    <li
      onClick={(e) => {
        toggleTodo(todo.id);
      }}
    >
      {!isEditing ? (
        <>
          <p>{todo.task}</p>
          <div>
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
        <form>
          <input type="text" value={task} onChange={handleChange} />
          <button
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
