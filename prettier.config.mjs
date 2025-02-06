const functions = ['cn', 'clsx', 'cva']

/** @type {import("prettier").Config} */
const prettierConfig = {
  semi: false,
  singleQuote: true,
  tabWidth: 2,
  useTabs: false,
  trailingComma: 'es5',
  printWidth: 80,
  bracketSpacing: true,
  arrowParens: 'always',
  endOfLine: 'lf',
  tailwindFunctions: functions,
  customFunctions: functions,
  plugins: [
    'prettier-plugin-classnames',
    'prettier-plugin-tailwindcss',
    'prettier-plugin-merge',
  ],
}

export default prettierConfig
