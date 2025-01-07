import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { RadioGroup } from './index';

const mockOptions = [
  { value: 'option1', label: 'Option 1' },
  { value: 'option2', label: 'Option 2', description: 'Description for Option 2' },
  { value: 'option3', label: 'Option 3', disabled: true },
];

describe('RadioGroup', () => {
  it('renders all options correctly', () => {
    render(<RadioGroup name="test" options={mockOptions} />);
    expect(screen.getAllByRole('radio')).toHaveLength(3);
    expect(screen.getByLabelText('Option 1')).toBeInTheDocument();
    expect(screen.getByLabelText('Option 2')).toBeInTheDocument();
    expect(screen.getByLabelText('Option 3')).toBeInTheDocument();
  });

  it('renders descriptions when provided', () => {
    render(<RadioGroup name="test" options={mockOptions} />);
    expect(screen.getByText('Description for Option 2')).toBeInTheDocument();
  });

  it('applies variant classes correctly', () => {
    render(<RadioGroup name="test" options={mockOptions} variant="solid" />);
    const radio = screen.getAllByRole('radio')[0];
    expect(radio).toHaveClass('bg-primary-600');
  });

  it('applies validation error styles', () => {
    render(<RadioGroup name="test" options={mockOptions} validation="error" />);
    const radio = screen.getAllByRole('radio')[0];
    expect(radio).toHaveClass('border-error-500');
  });

  it('applies validation success styles', () => {
    render(<RadioGroup name="test" options={mockOptions} validation="success" />);
    const radio = screen.getAllByRole('radio')[0];
    expect(radio).toHaveClass('border-success-500');
  });

  it('displays error message', () => {
    render(
      <RadioGroup
        name="test"
        options={mockOptions}
        error="Please select an option"
      />
    );
    expect(screen.getByText('Please select an option')).toBeInTheDocument();
    const radio = screen.getAllByRole('radio')[0];
    expect(radio).toHaveAttribute('aria-invalid', 'true');
  });

  it('handles disabled options correctly', () => {
    render(<RadioGroup name="test" options={mockOptions} />);
    const disabledRadio = screen.getByLabelText('Option 3');
    expect(disabledRadio).toBeDisabled();
  });

  it('allows selecting options', async () => {
    const user = userEvent.setup();
    render(<RadioGroup name="test" options={mockOptions} />);
    
    const option1 = screen.getByLabelText('Option 1');
    const option2 = screen.getByLabelText('Option 2');
    
    await user.click(option1);
    expect(option1).toBeChecked();
    expect(option2).not.toBeChecked();
    
    await user.click(option2);
    expect(option1).not.toBeChecked();
    expect(option2).toBeChecked();
  });

  it('maintains proper accessibility attributes', () => {
    render(<RadioGroup name="test" options={mockOptions} />);
    const optionWithDescription = screen.getByLabelText('Option 2');
    expect(optionWithDescription).toHaveAttribute('aria-describedby');
  });

  it('applies custom className', () => {
    render(<RadioGroup name="test" options={mockOptions} className="custom-class" />);
    const radio = screen.getAllByRole('radio')[0];
    expect(radio).toHaveClass('custom-class');
  });

  it('forwards ref correctly', () => {
    const ref = React.createRef<HTMLDivElement>();
    render(<RadioGroup ref={ref} name="test" options={mockOptions} />);
    expect(ref.current).toBeInstanceOf(HTMLDivElement);
  });
}); 