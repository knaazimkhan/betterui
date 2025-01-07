import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Switch } from './index';

describe('Switch Component', () => {
  it('renders correctly with default props', () => {
    render(<Switch />);
    const switchElement = screen.getByRole('switch');
    expect(switchElement).toBeInTheDocument();
    expect(switchElement).toHaveAttribute('aria-checked', 'false');
  });

  it('renders with label and description', () => {
    const label = 'Test Label';
    const description = 'Test Description';
    render(<Switch label={label} description={description} />);
    
    expect(screen.getByText(label)).toBeInTheDocument();
    expect(screen.getByText(description)).toBeInTheDocument();
  });

  it('handles checked state correctly', () => {
    const handleClick = jest.fn();
    render(<Switch checked onClick={handleClick} />);
    
    const switchElement = screen.getByRole('switch');
    expect(switchElement).toHaveAttribute('aria-checked', 'true');
    expect(switchElement).toHaveAttribute('data-state', 'checked');
  });

  it('handles disabled state correctly', () => {
    const handleClick = jest.fn();
    render(<Switch disabled onClick={handleClick} />);
    
    const switchElement = screen.getByRole('switch');
    fireEvent.click(switchElement);
    
    expect(handleClick).not.toHaveBeenCalled();
    expect(switchElement).toBeDisabled();
  });

  it('displays error message and applies error styles', () => {
    const errorMessage = 'Error message';
    render(<Switch error={errorMessage} />);
    
    const switchElement = screen.getByRole('switch');
    const errorText = screen.getByText(errorMessage);
    
    expect(errorText).toBeInTheDocument();
    expect(switchElement).toHaveAttribute('aria-invalid', 'true');
    expect(switchElement).toHaveAttribute('aria-errormessage');
  });

  it('applies different size variants', () => {
    const { rerender } = render(<Switch size="sm" />);
    let switchElement = screen.getByRole('switch');
    expect(switchElement).toHaveClass('h-5 w-9');

    rerender(<Switch size="md" />);
    switchElement = screen.getByRole('switch');
    expect(switchElement).toHaveClass('h-6 w-11');

    rerender(<Switch size="lg" />);
    switchElement = screen.getByRole('switch');
    expect(switchElement).toHaveClass('h-7 w-[52px]');
  });

  it('applies different variants', () => {
    const { rerender } = render(<Switch variant="default" />);
    let switchElement = screen.getByRole('switch');
    expect(switchElement).toHaveClass('bg-secondary-200');

    rerender(<Switch variant="primary" />);
    switchElement = screen.getByRole('switch');
    expect(switchElement).toHaveClass('bg-primary-200');
  });

  it('handles click events correctly', () => {
    const handleClick = jest.fn();
    render(<Switch onClick={handleClick} />);
    
    const switchElement = screen.getByRole('switch');
    fireEvent.click(switchElement);
    
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('maintains accessibility attributes', () => {
    const description = 'Test Description';
    render(<Switch description={description} />);
    
    const switchElement = screen.getByRole('switch');
    expect(switchElement).toHaveAttribute('role', 'switch');
    expect(switchElement).toHaveAttribute('aria-describedby');
  });
}); 