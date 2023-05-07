import type { Meta, StoryObj } from 'storybook-solidjs'
import { action } from '@storybook/addon-actions'

import { Button } from './Button'
import { Icon } from '../icon/Icon'

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

export const IconButton: Story = {
  args: {
    children: <Icon name="alert" />,
    onClick: action('click!'),
  },
}
