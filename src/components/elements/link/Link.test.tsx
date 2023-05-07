import { describe, beforeEach, afterEach, test, expect } from 'vitest'

import { render } from '~/test/functions'
import { Link, LinkProps } from './Link'

describe('<Link>link</Link>', () => {
  let link: HTMLAnchorElement
  let unmount: () => void
  const props: LinkProps = {
    children: 'link',
    href: 'https://github.com/ryamakuchi/ryamakuchi.me',
  }
  const beforeEachFn = (execute?: () => void) => {
    if (unmount) unmount()
    if (execute) execute()
    const { element, unmountFn } = render<HTMLAnchorElement>(() => <Link {...props}>{props.children}</Link>)
    const _link = element.querySelector('a')
    if (_link) link = _link
    unmount = unmountFn
  }

  beforeEach(() => {
    beforeEachFn()
  })

  afterEach(() => {
    unmount()
  })

  test('render', () => {
    expect(link.textContent).toEqual('link')
    expect(link.href).toEqual('https://github.com/ryamakuchi/ryamakuchi.me')
    expect(link.target).toEqual('_blank')
    expect(link.rel).toEqual('noreferrer noopener')
  })
})
