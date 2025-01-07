import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Checkbox } from './index';

describe('Checkbox', () => {
  it('renders correctly with default props', () => {
    render(<Checkbox />);
    expect(screen.getByRole('checkbox')).toBeInTheDocument();
  });

  it('renders with label', () => {
    render(<Checkbox label="Accept terms" />);
    expect(screen.getByLabelText('Accept terms')).toBeInTheDocument();
  });

  it('renders with description', () => {
    render(
      <Checkbox
        label="Newsletter"
        description="Receive updates about our products"
      />
    );
    expect(screen.getByText('Receive updates about our products')).toBeInTheDocument();
  });

  it('applies variant classes correctly', () => {
    render(<Checkbox variant="solid" />);
    const checkbox = screen.getByRole('checkbox');
    expect(checkbox).toHaveClass('bg-primary-600');
  });

  it('applies validation error styles', () => {
    render(<Checkbox validation="error" />);
    const checkbox = screen.getByRole('checkbox');
    expect(checkbox).toHaveClass('border-error-500');
  });

  it('applies validation success styles', () => {
    render(<Checkbox validation="success" />);
    const checkbox = screen.getByRole('checkbox');
    expect(checkbox).toHaveClass('border-success-500');
  });

  it('displays error message', () => {
    render(
      <Checkbox
        error="This field is required"
        label="Required field"
      />
    );
    expect(screen.getByText('This field is required')).toBeInTheDocument();
    const checkbox = screen.getByRole('checkbox');
    expect(checkbox).toHaveAttribute('aria-invalid', 'true');
  });

  it('can be checked and unchecked', async () => {
    const user = userEvent.setup();
    render(<Checkbox label="Toggle me" />);
    const checkbox = screen.getByRole('checkbox');
    
    expect(checkbox).not.toBeChecked();
    await user.click(checkbox);
    expect(checkbox).toBeChecked();
    await user.click(checkbox);
    expect(checkbox).not.toBeChecked();
  });

  it('handles disabled state', () => {
    render(<Checkbox disabled label="Disabled checkbox" />);
    const checkbox = screen.getByRole('checkbox');
    expect(checkbox).toBeDisabled();
  });

  it('forwards ref correctly', () => {
    const ref = React.createRef<HTMLInputElement>();
    render(<Checkbox ref={ref} />);
    expect(ref.current).toBeInstanceOf(HTMLInputElement);
  });

  it('applies custom className', () => {
    render(<Checkbox className="custom-class" />);
    const checkbox = screen.getByRole('checkbox');
    expect(checkbox).toHaveClass('custom-class');
  });

  it('maintains proper accessibility attributes', () => {
    render(
      <Checkbox
        label="Accessible checkbox"
        description="This is a description"
        error="This is an error"
      />
    );
    const checkbox = screen.getByRole('checkbox');
    expect(checkbox).toHaveAttribute('aria-describedby');
    expect(checkbox).toHaveAttribute('aria-invalid', 'true');
    expect(checkbox).toHaveAttribute('aria-errormessage');
  });
}); 