/**
 * @filename: lint-staged.config.js
 * @type {import('lint-staged').Configuration}
 */

import path from 'path'

const buildEslintCommand = (filenames) =>
  `next lint --fix --file ${filenames
    .map((f) => path.relative(process.cwd(), f))
    .join(' --file ')}`

const lintstagedConfig = {
  '*.{ts,tsx,mdx}': [buildEslintCommand],
  '*.{mjs,json}': [buildEslintCommand],
}

export default lintstagedConfig
