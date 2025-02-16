import fs from 'fs'
import path from 'path'

import { DynamicCodeBlock } from 'fumadocs-ui/components/dynamic-codeblock'

interface CodeSnippetProps {
  componentPath: string
}
export default function CodeSnippet({ componentPath }: CodeSnippetProps) {
  const filePath = path.resolve(process.cwd(), componentPath)
  const code = fs.readFileSync(filePath, 'utf-8')

  return <DynamicCodeBlock lang="ts" code={code} />
}
