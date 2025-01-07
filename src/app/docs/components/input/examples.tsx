'use client';

import React from 'react';
import { Input } from '@/components/ui/input';

const inputVariantsCode = `<Input variant="default" placeholder="Default input" />
<Input variant="ghost" placeholder="Ghost input" />
<Input variant="underlined" placeholder="Underlined input" />`;

const inputSizesCode = `<Input size="sm" placeholder="Small input" />
<Input size="md" placeholder="Medium input" />
<Input size="lg" placeholder="Large input" />`;

const inputValidationCode = `<Input validation="error" placeholder="Error input" error="This field is required" />
<Input validation="success" placeholder="Success input" />`;

const inputWithIconsCode = `<Input
  leftIcon={
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  }
  placeholder="Search..."
/>

<Input
  rightIcon={
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 5v14" />
      <path d="m19 12-7 7-7-7" />
    </svg>
  }
  placeholder="Select..."
/>

<Input
  leftIcon={
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
      <path d="m22 6-10 7L2 6" />
    </svg>
  }
  rightIcon={
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 6 7 17l-5-5" />
    </svg>
  }
  placeholder="With both icons"
/>`;

const inputTypesCode = `<Input type="password" placeholder="Password input" />
<Input type="number" placeholder="Number input" />
<Input type="email" placeholder="Email input" />
<Input type="date" />`;

const examples = [
  {
    title: 'Variants',
    description: 'Input fields come in different visual styles.',
    preview: (
      <div className="flex flex-col gap-4">
        <Input variant="default" placeholder="Default input" />
        <Input variant="ghost" placeholder="Ghost input" />
        <Input variant="underlined" placeholder="Underlined input" />
      </div>
    ),
    code: inputVariantsCode,
  },
  {
    title: 'Sizes',
    description: 'Input fields are available in different sizes.',
    preview: (
      <div className="flex flex-col gap-4">
        <Input size="sm" placeholder="Small input" />
        <Input size="md" placeholder="Medium input" />
        <Input size="lg" placeholder="Large input" />
      </div>
    ),
    code: inputSizesCode,
  },
  {
    title: 'Validation States',
    description: 'Input fields can show validation states with error messages.',
    preview: (
      <div className="flex flex-col gap-4">
        <Input validation="error" placeholder="Error input" error="This field is required" />
        <Input validation="success" placeholder="Success input" />
      </div>
    ),
    code: inputValidationCode,
  },
  {
    title: 'With Icons',
    description: 'Input fields can include icons on either or both sides.',
    preview: (
      <div className="flex flex-col gap-4">
        <Input
          leftIcon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="11" cy="11" r="8" />
              <path d="m21 21-4.3-4.3" />
            </svg>
          }
          placeholder="Search..."
        />
        <Input
          rightIcon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 5v14" />
              <path d="m19 12-7 7-7-7" />
            </svg>
          }
          placeholder="Select..."
        />
        <Input
          leftIcon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
              <path d="m22 6-10 7L2 6" />
            </svg>
          }
          rightIcon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M18 6 7 17l-5-5" />
            </svg>
          }
          placeholder="With both icons"
        />
      </div>
    ),
    code: inputWithIconsCode,
  },
  {
    title: 'Input Types',
    description: 'Input fields support various HTML input types.',
    preview: (
      <div className="flex flex-col gap-4">
        <Input type="password" placeholder="Password input" />
        <Input type="number" placeholder="Number input" />
        <Input type="email" placeholder="Email input" />
        <Input type="date" />
      </div>
    ),
    code: inputTypesCode,
  },
];

export { examples as InputExamples }; 