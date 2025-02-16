import fs from 'fs'
import path from 'path'

import { DynamicCodeBlock } from 'fumadocs-ui/components/dynamic-codeblock'

interface CodeSnippetProps {
  componentPath: string
}
export function CodeSnippet({ componentPath }: CodeSnippetProps) {
  const filePath = path.resolve(process.cwd(), componentPath)
  let code = fs.readFileSync(filePath, 'utf-8')

  // Match any TypeScript interface definition
  const interfacePattern = /(\bexport?\s*interface\s+\w+\s*\{[\s\S]*?\})/g
  const interfaces = code.match(interfacePattern) || []

  // Remove comments inside interfaces and handle export keyword
  interfaces.forEach((interfaceCode) => {
    const cleanInterface = interfaceCode
      .replace(/^\s*\/\/.*$/gm, '') // Remove single-line comments inside interfaces
      .replace(/\/\*[\s\S]*?\*\//g, '') // Remove block comments inside interfaces
      .replace(/^\s*export\s+/g, '') // Remove the 'export' keyword from interfaces
      .replace(/\n\s*\n/g, '\n') // Remove extra blank lines inside the interface
    code = code.replace(interfaceCode, cleanInterface) // Replace the original interface code with cleaned one
  })

  return <DynamicCodeBlock lang="ts" code={code} />
}
