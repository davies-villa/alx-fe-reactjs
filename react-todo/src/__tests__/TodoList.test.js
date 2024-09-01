import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import TodoList from '../components/TodoList';

const mockTodos = [
  { text: 'Learn React', completed: false },
  { text: 'Write Tests', completed: true },
];

const mockToggleTodo = jest.fn();

describe('TodoList Component', () => {
  test('renders TodoList component correctly', () => {
    render(<TodoList todos={mockTodos} toggleTodo={mockToggleTodo} />);

    expect(screen.getByText('Todo List')).toBeInTheDocument();

    expect(screen.getByPlaceholderText('Add a new todo')).toBeInTheDocument();

    expect(screen.getByText('Learn React')).toBeInTheDocument();
    expect(screen.getByText('Write Tests')).toBeInTheDocument();
  });

  test('toggles todo completion', () => {
    render(<TodoList todos={mockTodos} toggleTodo={mockToggleTodo} />);
    
    const todo = screen.getByText('Learn React');

    fireEvent.click(todo);

    expect(mockToggleTodo).toHaveBeenCalledWith(0);

    fireEvent.click(todo);

    expect(mockToggleTodo).toHaveBeenCalledWith(0);
  });

  test('applies the correct styles to completed and incomplete todos', () => {
    render(<TodoList todos={mockTodos} toggleTodo={mockToggleTodo} />);

    const incompleteTodo = screen.getByText('Learn React');
    const completedTodo = screen.getByText('Write Tests');

    expect(incompleteTodo).toHaveStyle('text-decoration: none');
    expect(completedTodo).toHaveStyle('text-decoration: line-through');
  });
});
