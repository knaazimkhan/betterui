import { DynamicCodeBlock } from 'fumadocs-ui/components/dynamic-codeblock'
import { Tab, Tabs } from 'fumadocs-ui/components/tabs'

import { PreviewComponent } from './preview-component'

interface CodeExampleProps {
  preview: React.ReactNode
  code: string
}

export const CodeExample: React.FC<CodeExampleProps> = ({ preview, code }) => {
  return (
    <Tabs items={['Preview', 'Code']}>
      <Tab value="Preview">
        <PreviewComponent>{preview}</PreviewComponent>
      </Tab>
      <Tab value="Code">
        <DynamicCodeBlock lang="tsx" code={code} />
      </Tab>
    </Tabs>
  )
}
