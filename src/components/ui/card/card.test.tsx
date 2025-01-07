import React from 'react';
import { render, screen } from '@testing-library/react';
import { Card, CardHeader, CardBody, CardFooter, CardImage } from './index';

describe('Card', () => {
  it('renders children correctly', () => {
    render(<Card>Card Content</Card>);
    expect(screen.getByText('Card Content')).toBeInTheDocument();
  });

  it('applies variant classes correctly', () => {
    render(<Card variant="ghost">Card Content</Card>);
    const card = screen.getByText('Card Content');
    expect(card).toHaveClass('bg-secondary-50/50');
  });

  it('applies border classes correctly', () => {
    render(<Card border="default">Card Content</Card>);
    const card = screen.getByText('Card Content');
    expect(card).toHaveClass('border');
  });

  it('applies shadow classes correctly', () => {
    render(<Card shadow="lg">Card Content</Card>);
    const card = screen.getByText('Card Content');
    expect(card).toHaveClass('shadow-lg');
  });

  it('applies custom className', () => {
    render(<Card className="custom-class">Card Content</Card>);
    const card = screen.getByText('Card Content');
    expect(card).toHaveClass('custom-class');
  });
});

describe('CardHeader', () => {
  it('renders children correctly', () => {
    render(<CardHeader>Header Content</CardHeader>);
    expect(screen.getByText('Header Content')).toBeInTheDocument();
  });

  it('applies border styles', () => {
    render(<CardHeader>Header Content</CardHeader>);
    const header = screen.getByText('Header Content');
    expect(header).toHaveClass('border-b');
  });
});

describe('CardBody', () => {
  it('renders children correctly', () => {
    render(<CardBody>Body Content</CardBody>);
    expect(screen.getByText('Body Content')).toBeInTheDocument();
  });

  it('applies padding classes', () => {
    render(<CardBody>Body Content</CardBody>);
    const body = screen.getByText('Body Content');
    expect(body).toHaveClass('px-6', 'py-4');
  });
});

describe('CardFooter', () => {
  it('renders children correctly', () => {
    render(<CardFooter>Footer Content</CardFooter>);
    expect(screen.getByText('Footer Content')).toBeInTheDocument();
  });

  it('applies border styles', () => {
    render(<CardFooter>Footer Content</CardFooter>);
    const footer = screen.getByText('Footer Content');
    expect(footer).toHaveClass('border-t');
  });
});

describe('CardImage', () => {
  it('renders image with correct props', () => {
    render(
      <CardImage
        src="/test-image.jpg"
        alt="Test Image"
        width={300}
        height={200}
      />
    );
    const image = screen.getByAltText('Test Image');
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute('alt', 'Test Image');
    expect(image).toHaveAttribute('src');
  });

  it('applies object-cover class to image', () => {
    render(
      <CardImage
        src="/test-image.jpg"
        alt="Test Image"
        width={300}
        height={200}
      />
    );
    const image = screen.getByAltText('Test Image');
    expect(image).toHaveClass('object-cover');
  });
}); 