import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { RadioGroup, RadioGroupItem } from './index'

describe('RadioGroup', () => {
  it('renders radio group with items correctly', () => {
    render(
      <RadioGroup defaultValue="option1">
        <RadioGroupItem value="option1" id="option1">Option 1</RadioGroupItem>
        <RadioGroupItem value="option2" id="option2">Option 2</RadioGroupItem>
        <RadioGroupItem value="option3" id="option3" disabled>Option 3</RadioGroupItem>
      </RadioGroup>
    )
    
    expect(screen.getByRole('radiogroup')).toBeInTheDocument()
    expect(screen.getAllByRole('radio')).toHaveLength(3)
  })

  it('allows selecting options', async () => {
    const user = userEvent.setup()
    render(
      <RadioGroup defaultValue="option1">
        <RadioGroupItem value="option1" id="option1">Option 1</RadioGroupItem>
        <RadioGroupItem value="option2" id="option2">Option 2</RadioGroupItem>
      </RadioGroup>
    )
    
    const option1 = screen.getByLabelText('Option 1')
    const option2 = screen.getByLabelText('Option 2')
    
    expect(option1).toBeChecked()
    expect(option2).not.toBeChecked()
    
    await user.click(option2)
    expect(option1).not.toBeChecked()
    expect(option2).toBeChecked()
  })

  it('handles disabled state correctly', () => {
    render(
      <RadioGroup defaultValue="option1">
        <RadioGroupItem value="option1" id="option1">Option 1</RadioGroupItem>
        <RadioGroupItem value="option2" id="option2" disabled>Option 2</RadioGroupItem>
      </RadioGroup>
    )
    
    const disabledRadio = screen.getByLabelText('Option 2')
    expect(disabledRadio).toBeDisabled()
  })

  it('applies custom className', () => {
    render(
      <RadioGroup defaultValue="option1" className="custom-class">
        <RadioGroupItem value="option1" id="option1">Option 1</RadioGroupItem>
      </RadioGroup>
    )
    
    expect(screen.getByRole('radiogroup')).toHaveClass('custom-class')
  })
}) 