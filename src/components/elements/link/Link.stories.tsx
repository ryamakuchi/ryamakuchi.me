import type { Meta, StoryObj } from 'storybook-solidjs'

import { Link } from './Link'

type Story = StoryObj<typeof Link>

const meta: Meta<typeof Link> = {
  title: 'elements/Link',
  component: Link,
}

export default meta

export const Default: Story = {
  args: {
    children: 'link',
    href: 'https://github.com/ryamakuchi/ryamakuchi.me',
  },
}
