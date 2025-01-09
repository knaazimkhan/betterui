import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Switch } from './index'

describe('Switch', () => {
  it('renders switch correctly', () => {
    render(<Switch />)
    expect(screen.getByRole('switch')).toBeInTheDocument()
  })

  it('handles checked state correctly', async () => {
    const user = userEvent.setup()
    const onChange = jest.fn()
    
    render(<Switch onCheckedChange={onChange} />)
    const switchElement = screen.getByRole('switch')
    
    expect(switchElement).toHaveAttribute('aria-checked', 'false')
    await user.click(switchElement)
    expect(onChange).toHaveBeenCalledWith(true)
    expect(switchElement).toHaveAttribute('aria-checked', 'true')
  })

  it('handles disabled state correctly', async () => {
    const user = userEvent.setup()
    const onChange = jest.fn()
    
    render(<Switch disabled onCheckedChange={onChange} />)
    const switchElement = screen.getByRole('switch')
    
    expect(switchElement).toBeDisabled()
    await user.click(switchElement)
    expect(onChange).not.toHaveBeenCalled()
  })

  it('applies custom className', () => {
    render(<Switch className="custom-class" />)
    expect(screen.getByRole('switch')).toHaveClass('custom-class')
  })

  it('maintains accessibility attributes', () => {
    render(<Switch aria-label="Toggle feature" />)
    const switchElement = screen.getByRole('switch')
    expect(switchElement).toHaveAttribute('aria-label', 'Toggle feature')
  })
}) 