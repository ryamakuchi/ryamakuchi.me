import type { Meta, StoryObj } from 'storybook-solidjs'
import { action } from '@storybook/addon-actions'

import { Button } from './Button'

type Story = StoryObj<typeof Button>

const meta: Meta<typeof Button> = {
  title: 'elements/Button',
  component: Button,
}

export default meta

export const Default: Story = {
  args: {
    children: 'button',
    onClick: action('click!'),
  },
}
