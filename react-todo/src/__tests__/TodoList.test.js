import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // Import jest-dom matchers
import TodoList from '../components/TodoList'; // Adjust the import path if necessary

const mockToggleTodo = jest.fn();

test('renders TodoList component correctly', () => {
  render(<TodoList todos={[{ text: 'Learn React', completed: false }]} toggleTodo={mockToggleTodo} />);
  expect(screen.getByText('Todo List')).toBeInTheDocument();
  expect(screen.getByPlaceholderText('Add a new todo')).toBeInTheDocument();
});

test('toggles todo completion', () => {
  render(<TodoList todos={[{ text: 'Learn React', completed: false }]} toggleTodo={mockToggleTodo} />);
  
  const todo = screen.getByText('Learn React');
  
  // Simulate clicking the todo item
  fireEvent.click(todo);

  // Check if toggleTodo was called
  expect(mockToggleTodo).toHaveBeenCalled();

  // Check the style after clicking
  expect(todo).toHaveStyle('text-decoration: line-through');

  // Simulate clicking the todo item again to toggle back
  fireEvent.click(todo);

  // Check the style after clicking again
  expect(todo).toHaveStyle('text-decoration: none');
});
