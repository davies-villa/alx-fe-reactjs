import React from 'react';

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

export default TodoList;
