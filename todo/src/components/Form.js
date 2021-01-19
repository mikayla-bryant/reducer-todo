import React from 'react';
import reducer, { initialState } from '../reducers';
import TodoList from './TodoList';

import { useReducer } from 'react';
import {
  setNewTodo,
  setNewTodoText,
  setCompleted,
  clearCompleted,
} from '../actions/index';

const Form = () => {
  const initialFormValue = '';
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleSubmit = (e) => {
    e.preventDefault();
    let newTodo = {
      item: state.newTodoText,
      completed: false,
      id: new Date(),
    };

    dispatch(setNewTodo(newTodo));
    dispatch(setNewTodoText(initialFormValue));
  };

  const onChange = (e) => {
    dispatch(setNewTodoText(e.target.value));
  };

  const handleCompleted = (id) => {
    dispatch(setCompleted(id));
  };

  const handleClear = (e) => {
    e.preventDefault();
    dispatch(clearCompleted());
  };

  return (
    <div>
      <form className='add-task' onSubmit={handleSubmit}>
        Todo:
        <input
          type='text'
          name='title'
          value={state.newTodoText}
          placeholder='Add todo'
          onChange={onChange}
        />
        <button className='add-btn'>Submit!</button>
      </form>
      <div className='clear-btn'>
        <button onClick={handleClear}>Clear Completed</button>
      </div>

      <TodoList
        state={state}
        dispatch={dispatch}
        handleCompleted={handleCompleted}
      />
    </div>
  );
};

export default Form;
