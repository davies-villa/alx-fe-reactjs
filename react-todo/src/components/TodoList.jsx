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
    <div style={{ maxWidth: '600px', margin: '0 auto', padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1 style={{ textAlign: 'center', color: '#333' }}>Todo List</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          const newTodo = e.target.elements.todo.value;
          if (newTodo) {
            setTodos([...todos, newTodo]);
            e.target.reset();
          }
        }}
        style={{ display: 'flex', marginBottom: '20px' }}
      >
        <input
          name="todo"
          placeholder="Add a new todo"
          type="text"
          style={{
            flex: 1,
            padding: '10px',
            border: '1px solid #ddd',
            borderRadius: '4px',
            fontSize: '16px',
          }}
        />
        <button
          type="submit"
          style={{
            marginLeft: '10px',
            padding: '10px 20px',
            border: 'none',
            borderRadius: '4px',
            backgroundColor: '#007bff',
            color: '#fff',
            fontSize: '16px',
            cursor: 'pointer',
          }}
        >
          Add
        </button>
      </form>
      <ul style={{ listStyleType: 'none', padding: '0' }}>
        {todos.map((todo, index) => (
          <li
            key={index}
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              padding: '10px 0',
              borderBottom: '1px solid #ddd',
            }}
          >
            <span>{todo}</span>
            <button
              onClick={() => deleteTodo(index)}
              style={{
                padding: '5px 10px',
                border: 'none',
                borderRadius: '4px',
                backgroundColor: '#dc3545',
                color: '#fff',
                cursor: 'pointer',
              }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
