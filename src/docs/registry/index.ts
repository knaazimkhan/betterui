import { type ComponentType } from 'react'
import * as Button from '@/components/ui/button'
import * as Card from '@/components/ui/card'
import * as Checkbox from '@/components/ui/checkbox'
import * as Input from '@/components/ui/input'
import * as Radio from '@/components/ui/radio'
import * as Select from '@/components/ui/select'
import * as Switch from '@/components/ui/switch'
import * as Tabs from '@/components/ui/tabs'

import * as button from '@/docs/data/button'
import * as card from '@/docs/data/card'
import * as checkbox from '@/docs/data/checkbox'
import * as input from '@/docs/data/input'
import * as radio from '@/docs/data/radio'
import * as select from '@/docs/data/select'
import * as toggleSwitch from '@/docs/data/switch'
import * as tabs from '@/docs/data/tabs'

export interface ComponentRegistry {
    name: string
    type: 'atoms' | 'molecules' | 'organisms' | 'templates'
    component: ComponentType<any>
    preview: React.ReactNode
    examples: {
        title: string
        description: string
        code: string
        // preview: ComponentType
        preview: React.ReactNode
    }[]
    metadata: {
        description: string
        features: string[]
        source: string
        usage: {
            import: string
            code: string
        }
        props: {
            name: string
            type: string
            description: string
            defaultValue?: string
            required?: boolean
        }[]
    }
}

export const registry: Record<string, ComponentRegistry> = {
    button: {
        name: 'Button',
        type: 'atoms',
        component: Button.Button,
        preview: button.preview,
        examples: button.ButtonExamples,
        metadata: button.metadata,
    },
    card: {
        name: 'Card',
        type: 'molecules',
        component: Card.Card,
        preview: card.preview,
        examples: card.CardExamples,
        metadata: card.metadata,
    },
    checkbox: {
        name: 'Checkbox',
        type: 'atoms',
        component: Checkbox.Checkbox,
        preview: checkbox.preview,
        examples: checkbox.CheckboxExamples,
        metadata: checkbox.metadata,
    },
    input: {
        name: 'Input',
        type: 'atoms',
        component: Input.Input,
        preview: input.preview,
        examples: input.InputExamples,
        metadata: input.metadata,
    },
    radio: {
        name: 'Radio',
        type: 'atoms',
        component: Radio.RadioGroup,
        preview: radio.preview,
        examples: radio.RadioExamples,
        metadata: radio.metadata,
    },
    select: {
        name: 'Select',
        type: 'atoms',
        component: Select.Select,
        preview: select.preview,
        examples: select.SelectExamples,
        metadata: select.metadata,
    },
    switch: {
        name: 'Switch',
        type: 'atoms',
        component: Switch.Switch,
        preview: toggleSwitch.preview,
        examples: toggleSwitch.SwitchExamples,
        metadata: toggleSwitch.metadata,
    },
    tabs: {
        name: 'Tabs',
        type: 'molecules',
        component: Tabs.Tabs,
        preview: tabs.preview,
        examples: tabs.TabsExamples,
        metadata: tabs.metadata,
    },
} 