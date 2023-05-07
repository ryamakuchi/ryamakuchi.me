import { describe, beforeEach, afterEach, test, expect } from 'vitest'
import octicons from '@primer/octicons'
import { render } from '~/test/functions'
import { Icon, IconProps, OcticonOptions } from './Icon'

describe('<Icon name="alert" />', () => {
  let icon: HTMLSpanElement
  let unmount: () => void
  const name = 'alert'
  let props: IconProps = { name }
  const toSvg = ({ name, height, width, css, ariaLabel }: IconProps): string => {
    const options: OcticonOptions = {}
    if (height) options.height = height
    if (width) options.width = width
    if (css) options.class = css
    if (ariaLabel) options['aria-label'] = ariaLabel
    return octicons[name]?.toSVG(options) ?? ''
  }

  const beforeEachFn = (execute?: () => void) => {
    if (unmount) unmount()
    if (execute) execute()
    const { element, unmountFn } = render<HTMLButtonElement>(() => <Icon {...props} />)
    const _span = element.querySelector('span')
    if (_span) icon = _span
    unmount = unmountFn
  }

  beforeEach(() => {
    beforeEachFn()
  })

  afterEach(() => {
    unmount()
  })

  test('render', () => {
    expect(icon.innerHTML).toEqual(toSvg(props))
  })

  describe('default height', () => {
    test('default 16', () => {
      expect(icon.innerHTML).toEqual(toSvg({ name, height: 16 }))
    })
  })

  describe('height', () => {
    beforeEach(() => {
      beforeEachFn(() => {
        props = { name, height: 24 }
      })
    })

    test('height: 24', () => {
      expect(icon.innerHTML).toEqual(toSvg({ name, height: 24 }))
    })
  })

  describe('width', () => {
    beforeEach(() => {
      beforeEachFn(() => {
        props = { name, width: 24 }
      })
    })

    test('width: 24', () => {
      expect(icon.innerHTML).toEqual(toSvg({ name, width: 24 }))
    })
  })

  describe('width と height 両方指定', () => {
    beforeEach(() => {
      beforeEachFn(() => {
        props = { name, height: 12, width: 48 }
      })
    })

    test('width の指定が優先される', () => {
      expect(icon.innerHTML).toEqual(toSvg({ name, width: 48 }))
    })
  })

  describe('css', () => {
    beforeEach(() => {
      beforeEachFn(() => {
        props = { name, css: 'fooBar' }
      })
    })

    test('css: fooBar', () => {
      expect(icon.innerHTML).toEqual(toSvg({ name, css: 'fooBar' }))
    })
  })

  describe('ariaLabel', () => {
    beforeEach(() => {
      beforeEachFn(() => {
        props = { name: 'x', ariaLabel: 'close' }
      })
    })

    test('ariaLabel: close', () => {
      expect(icon.innerHTML).toEqual(toSvg({ name: 'x', ariaLabel: 'close' }))
    })
  })

  describe('Empty name', () => {
    beforeEach(() => {
      beforeEachFn(() => {
        props = { name: '' }
      })
    })

    test('return empty string', () => {
      expect(icon.innerHTML).toEqual('')
    })
  })
})
