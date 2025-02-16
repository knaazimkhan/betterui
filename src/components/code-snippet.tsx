import fs from 'fs'
import path from 'path'

import { DynamicCodeBlock } from 'fumadocs-ui/components/dynamic-codeblock'

interface CodeSnippetProps {
  componentPath: string
}
export default function CodeSnippet({ componentPath }: CodeSnippetProps) {
  const filePath = path.resolve(process.cwd(), componentPath)
  let code = fs.readFileSync(filePath, 'utf-8')

  // Remove TypeScript comments (`//` and `/** */`)
  code = code.replace(/\/\/.*|\/\*[\s\S]*?\*\//g, '')

  // Remove blank lines that existed *only* due to comment removal
  code = code
    .split('\n') // Convert to array of lines
    .filter((line, index, arr) => {
      const trimmed = line.trim()

      // Remove empty lines *unless* the previous and next lines have content
      if (trimmed === '') {
        const prev = arr[index - 1]?.trim() || ''
        const next = arr[index + 1]?.trim() || ''
        return prev !== '' && next !== ''
      }
      return true
    })
    .join('\n') // Convert back to string

  // Keep the `interface` section compact without extra blank lines
  code = code.replace(
    /(export interface TypingSimulatorTextProps\s*\{[\s\S]*?\})/g,
    (match) => match.replace(/\n\s*\n/g, '\n') // Remove extra blank lines inside the interface
  )

  return <DynamicCodeBlock lang="ts" code={code} />
}
