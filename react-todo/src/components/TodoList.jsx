import React from 'react';
import PropTypes from 'prop-types';

function TodoList({ todos = [], toggleTodo }) {
  return (
    <div>
      <h2>Todo List</h2>
      <input type="text" placeholder="Add a new todo" />
      {todos.map((todo, index) => (
        <div
          key={index}
          onClick={() => toggleTodo(index)}
          style={{
            textDecoration: todo.completed ? 'line-through' : 'none',
            cursor: 'pointer',
          }}
        >
          {todo.text}
        </div>
      ))}
    </div>
  );
}

TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string.isRequired,
      completed: PropTypes.bool.isRequired,
    })
  ).isRequired,
  toggleTodo: PropTypes.func.isRequired,
};

export default TodoList;

