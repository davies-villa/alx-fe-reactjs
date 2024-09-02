import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import TodoList from '../TodoList'; 

test('renders TodoList component correctly', () => {
  render(<TodoList />);
  expect(screen.getByText('Learn React')).toBeInTheDocument();
  expect(screen.getByText('Build a Todo App')).toBeInTheDocument();
});

test('can delete a todo item', () => {
  render(<TodoList />);
  
  const todoItem = screen.getByText('Learn React');
  
  const deleteButtons = screen.getAllByText('Delete');
  
  fireEvent.click(deleteButtons[0]);
  
  expect(todoItem).not.toBeInTheDocument();
});
