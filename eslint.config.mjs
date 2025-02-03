import { dirname } from 'path'
import { fileURLToPath } from 'url'

import { FlatCompat } from '@eslint/eslintrc'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const compat = new FlatCompat({ baseDirectory: __dirname })

const eslintConfig = [
  ...compat.config({
    extends: [
      'next/core-web-vitals',
      'next/typescript',
      'plugin:prettier/recommended',
    ],
    plugins: ['import'],
    rules: {
      'import/order': [
        'error',
        {
          groups: [
            'builtin', // Node.js built-in modules (e.g., `path`, `fs`)
            'external', // Third-party modules (e.g., `react`, `lodash`)
            'type', // Type imports (e.g., `type Props` from './types')
            'internal', // Internal modules (e.g., `@/components`, `@/utils`)
            'parent', // Parent directories (e.g., `../components`)
            'sibling', // Sibling files (e.g., `./Header`)
            'index', // Index files (e.g., `./index`)
            'object', // Object imports (e.g., `{ useState }` from 'react')
          ],
          pathGroups: [
            {
              pattern: 'react',
              group: 'external',
              position: 'before', // Ensure React always comes first
            },
            {
              pattern: 'next/**',
              group: 'external',
              position: 'before', // Ensures Next.js comes before other third-party modules
            },
          ],
          pathGroupsExcludedImportTypes: ['react', 'next'],
          'newlines-between': 'always', // Add a newline between groups
          alphabetize: {
            order: 'asc', // Sort imports alphabetically within each group
            caseInsensitive: true, // Case-insensitive sorting
          },
        },
      ],
      '@typescript-eslint/no-unused-vars': 'warn',
      '@typescript-eslint/explicit-module-boundary-types': 'off',
      'react/react-in-jsx-scope': 'off',
    },
  }),
]

export default eslintConfig
