import fs from 'fs'
import path from 'path'

import { DynamicCodeBlock } from 'fumadocs-ui/components/dynamic-codeblock'

interface CodeSnippetProps {
  componentPath: string
}
export default function CodeSnippet({ componentPath }: CodeSnippetProps) {
  const filePath = path.resolve(process.cwd(), componentPath)
  let code = fs.readFileSync(filePath, 'utf-8')

  // Remove comments inside the interface section
  const interfacePattern = /(export interface [\w\d]+\s*\{[\s\S]*?\})/g
  const interfaces = code.match(interfacePattern) || []

  // Remove comments inside interfaces
  interfaces.forEach((interfaceCode) => {
    const cleanInterface = interfaceCode
      .replace(/^\s*\/\/.*$/gm, '') // Remove single-line comments inside interfaces
      .replace(/\/\*[\s\S]*?\*\//g, '') // Remove block comments inside interfaces
      .replace(/^export\s+/g, '') // Remove the 'export' keyword from interfaces
    code = code.replace(interfaceCode, cleanInterface) // Replace the original interface code with cleaned one
  })

  // Remove comments outside the interface section
  // code = code.replace(/^\s*\/\/.*$/gm, '') // Remove single-line comments
  // code = code.replace(/\/\*[\s\S]*?\*\//g, '') // Remove block comments

  // Remove excessive blank lines (reduce 3+ newlines to just 2)
  // code = code.replace(/\n{3,}/g, '\n\n')

  code = code.replace(
    /(interface TypingSimulatorTextProps\s*\{[\s\S]*?\})/g,
    (match) => match.replace(/\n\s*\n/g, '\n') // Remove extra blank lines inside the interface
  )

  return <DynamicCodeBlock lang="ts" code={code} />
}
