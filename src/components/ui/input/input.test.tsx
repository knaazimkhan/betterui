import React from 'react';
import { render, screen } from '@testing-library/react';
import { Input } from './index';

describe('Input', () => {
  it('renders correctly with default props', () => {
    render(<Input placeholder="Enter text" />);
    expect(screen.getByPlaceholderText('Enter text')).toBeInTheDocument();
  });

  it('applies variant classes correctly', () => {
    render(<Input variant="ghost" placeholder="Ghost input" />);
    const input = screen.getByPlaceholderText('Ghost input');
    expect(input).toHaveClass('bg-secondary-100');
  });

  it('applies size classes correctly', () => {
    render(<Input size="lg" placeholder="Large input" />);
    const input = screen.getByPlaceholderText('Large input');
    expect(input).toHaveClass('h-12');
  });

  it('applies validation error styles', () => {
    render(<Input validation="error" placeholder="Error input" />);
    const input = screen.getByPlaceholderText('Error input');
    expect(input).toHaveClass('border-error-500');
  });

  it('applies validation success styles', () => {
    render(<Input validation="success" placeholder="Success input" />);
    const input = screen.getByPlaceholderText('Success input');
    expect(input).toHaveClass('border-success-500');
  });

  it('renders with left icon', () => {
    render(
      <Input
        leftIcon={<span data-testid="left-icon">🔍</span>}
        placeholder="Search"
      />
    );
    expect(screen.getByTestId('left-icon')).toBeInTheDocument();
    const input = screen.getByPlaceholderText('Search');
    expect(input).toHaveClass('pl-10');
  });

  it('renders with right icon', () => {
    render(
      <Input
        rightIcon={<span data-testid="right-icon">✓</span>}
        placeholder="Validated"
      />
    );
    expect(screen.getByTestId('right-icon')).toBeInTheDocument();
    const input = screen.getByPlaceholderText('Validated');
    expect(input).toHaveClass('pr-10');
  });

  it('displays error message', () => {
    render(
      <Input
        id="test-input"
        error="This field is required"
        placeholder="Error field"
      />
    );
    expect(screen.getByText('This field is required')).toBeInTheDocument();
    const input = screen.getByPlaceholderText('Error field');
    expect(input).toHaveAttribute('aria-invalid', 'true');
    expect(input).toHaveAttribute('aria-errormessage', 'test-input-error');
  });

  it('forwards ref correctly', () => {
    const ref = React.createRef<HTMLInputElement>();
    render(<Input ref={ref} placeholder="Ref input" />);
    expect(ref.current).toBeInstanceOf(HTMLInputElement);
  });

  it('applies custom className', () => {
    render(<Input className="custom-class" placeholder="Custom input" />);
    const input = screen.getByPlaceholderText('Custom input');
    expect(input).toHaveClass('custom-class');
  });
}); 