import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import TodoList from '../components/TodoList';

describe('TodoList Component', () => {
  test('renders TodoList component', () => {
    render(<TodoList />);
    expect(screen.getByText('Todo List')).toBeInTheDocument();
  });

  test('renders initial todos', () => {
    render(<TodoList />);
    expect(screen.getByText('Learn React')).toBeInTheDocument();
    expect(screen.getByText('Build a Todo App')).toBeInTheDocument();
  });

  test('adds a new todo', () => {
    render(<TodoList />);
    const input = screen.getByPlaceholderText('Add a new todo');
    const addButton = screen.getByText('Add Todo');

    fireEvent.change(input, { target: { value: 'New Todo' } });
    fireEvent.click(addButton);

    expect(screen.getByText('New Todo')).toBeInTheDocument();
  });

  test('toggles a todo item', () => {
    render(<TodoList />);
    const todoItem = screen.getByText('Learn React');
    fireEvent.click(todoItem);

    expect(todoItem).toHaveClass('completed');
  });

  test('deletes a todo item', () => {
    render(<TodoList />);
    const deleteButton = screen.getAllByText('Delete')[0];
    fireEvent.click(deleteButton);

    expect(screen.queryByText('Learn React')).not.toBeInTheDocument();
  });
});
