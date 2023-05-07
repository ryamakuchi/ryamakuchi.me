import type { Meta, StoryObj } from 'storybook-solidjs'

import { Icon } from './Icon'

type Story = StoryObj<typeof Icon>

const meta: Meta<typeof Icon> = {
  title: 'elements/Icon',
  component: Icon,
}

export default meta

export const Default: Story = {
  args: {
    name: 'alert',
  },
}

export const Height24: Story = {
  args: {
    name: 'alert',
    height: 24,
  },
}

export const Width48: Story = {
  args: {
    name: 'alert',
    width: 48,
  },
}

export const Css: Story = {
  args: {
    name: 'alert',
    css: 'fooBar',
  },
}

export const AriaLabel: Story = {
  args: {
    name: 'x',
    ariaLabel: 'close',
  },
}
