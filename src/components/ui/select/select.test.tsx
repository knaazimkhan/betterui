import React from 'react';
import { render, screen } from '@testing-library/react';
import { Select } from './index';

const mockOptions = [
  { value: 'option1', label: 'Option 1' },
  { value: 'option2', label: 'Option 2' },
  { value: 'option3', label: 'Option 3', disabled: true },
];

describe('Select', () => {
  it('renders correctly with default props', () => {
    render(<Select options={mockOptions} />);
    expect(screen.getByRole('combobox')).toBeInTheDocument();
    expect(screen.getAllByRole('option')).toHaveLength(3);
  });

  it('renders placeholder when provided', () => {
    render(<Select options={mockOptions} placeholder="Select an option" />);
    expect(screen.getByText('Select an option')).toBeInTheDocument();
    expect(screen.getAllByRole('option')).toHaveLength(4); // Including placeholder
  });

  it('applies variant classes correctly', () => {
    render(<Select options={mockOptions} variant="ghost" />);
    const select = screen.getByRole('combobox');
    expect(select).toHaveClass('bg-secondary-100');
  });

  it('applies size classes correctly', () => {
    render(<Select options={mockOptions} size="lg" />);
    const select = screen.getByRole('combobox');
    expect(select).toHaveClass('h-12');
  });

  it('applies validation error styles', () => {
    render(<Select options={mockOptions} validation="error" />);
    const select = screen.getByRole('combobox');
    expect(select).toHaveClass('border-error-500');
  });

  it('applies validation success styles', () => {
    render(<Select options={mockOptions} validation="success" />);
    const select = screen.getByRole('combobox');
    expect(select).toHaveClass('border-success-500');
  });

  it('displays error message', () => {
    render(
      <Select
        id="test-select"
        options={mockOptions}
        error="Please select an option"
      />
    );
    expect(screen.getByText('Please select an option')).toBeInTheDocument();
    const select = screen.getByRole('combobox');
    expect(select).toHaveAttribute('aria-invalid', 'true');
    expect(select).toHaveAttribute('aria-errormessage', 'test-select-error');
  });

  it('renders disabled options correctly', () => {
    render(<Select options={mockOptions} />);
    const disabledOption = screen.getByRole('option', { name: 'Option 3' });
    expect(disabledOption).toBeDisabled();
  });

  it('forwards ref correctly', () => {
    const ref = React.createRef<HTMLSelectElement>();
    render(<Select ref={ref} options={mockOptions} />);
    expect(ref.current).toBeInstanceOf(HTMLSelectElement);
  });

  it('applies custom className', () => {
    render(<Select options={mockOptions} className="custom-class" />);
    const select = screen.getByRole('combobox');
    expect(select).toHaveClass('custom-class');
  });
}); 