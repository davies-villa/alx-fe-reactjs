import React, { useState } from 'react';

const TodoList = () => {
  const [todos, setTodos] = useState([
    'Learn React',
    'Build a Todo App',
  ]);

  const deleteTodo = (index) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  return (
    <div>
      <h1>Todo List</h1>
      <form onSubmit={(e) => {
        e.preventDefault();
        const newTodo = e.target.elements.todo.value;
        if (newTodo) {
          setTodos([...todos, newTodo]);
          e.target.reset();
        }
      }}>
        <input name="todo" placeholder="Add a new todo" type="text" />
        <button type="submit">Add</button>
      </form>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            <span>{todo}</span>
            <button onClick={() => deleteTodo(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
