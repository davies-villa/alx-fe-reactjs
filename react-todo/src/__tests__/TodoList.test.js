import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import TodoList from '../TodoList'; 

describe('TodoList Component', () => {
  test('renders the TodoList component with initial todos', () => {
    render(<TodoList />);
    expect(screen.getByText('Learn React')).toBeInTheDocument();
    expect(screen.getByText('Build a Todo App')).toBeInTheDocument();
    expect(screen.getByText('Test the App')).toBeInTheDocument();
});


test('adds a new todo item', () => {
  render(<TodoList />);
  fireEvent.change(screen.getByPlaceholderText(/add a new todo/i), {
      target: { value: 'Write tests' }
  });
  fireEvent.click(screen.getByText(/add todo/i));
  expect(screen.getByText('Write tests')).toBeInTheDocument();
});


    test('toggles the completion status of a todo item', () => {
        render(<TodoList />);
        const todoItem = screen.getByText('Learn React');
        fireEvent.click(todoItem);
        expect(todoItem).toHaveStyle('text-decoration: line-through');
        fireEvent.click(todoItem);
        expect(todoItem).toHaveStyle('text-decoration: none');
    });

    test('deletes a todo item', () => {
        render(<TodoList />);
        fireEvent.click(screen.getByText('Delete', { selector: 'button' }));
        expect(screen.queryByText('Learn React')).not.toBeInTheDocument();
    });
});
