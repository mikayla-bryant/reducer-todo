import React from 'react';
import '../App.css';

const Todo = ({ todo, handleCompleted }) => {
  const handleClick = () => {
    handleCompleted(todo.id);
  };
  return (
    <div
      className={`task${todo.completed ? ' completed' : ''}`}
      onClick={handleClick}
    >
      <div>{todo.item}</div>
    </div>
  );
};

export default Todo;
