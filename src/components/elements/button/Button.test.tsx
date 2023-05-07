import { describe, vi, beforeEach, afterEach, test, expect } from 'vitest'

import { render, sample } from '~/test/functions'
import { Button, ButtonProps } from './Button'

describe('<Button>button</Button>', () => {
  let button: HTMLButtonElement
  let unmount: () => void
  const mock = vi.fn()
  const props: ButtonProps = {
    children: 'button',
    onClick: () => mock(),
  }
  const beforeEachFn = (execute?: () => void) => {
    if (unmount) unmount()
    if (execute) execute()
    const { element, unmountFn } = render<HTMLButtonElement>(() => <Button {...props}>{props.children}</Button>)
    const _button = element.querySelector('button')
    if (_button) button = _button
    unmount = unmountFn
  }

  beforeEach(() => {
    beforeEachFn()
  })

  afterEach(() => {
    unmount()
  })

  test('render', () => {
    expect(button.textContent).toEqual('button')
    expect(button.disabled).toBeFalsy()
    expect(button.autofocus).toBeFalsy()
    expect(button.type).toEqual('button')
  })

  test('click', () => {
    button.click()
    expect(mock).toBeCalled()
  })

  describe('type', () => {
    beforeEach(() => {
      const array: Exclude<ButtonProps['type'], undefined>[] = ['submit', 'reset']
      beforeEachFn(() => {
        props.type = sample(array)
      })
    })

    test('submit | reset', () => {
      expect(button.type).toEqual(props.type)
    })
  })

  describe('disabled', () => {
    beforeEach(() => {
      beforeEachFn(() => {
        props.disabled = true
      })
    })

    test('true', () => {
      expect(button.disabled).toBeTruthy
    })
  })

  describe('autofocus', () => {
    beforeEach(() => {
      beforeEachFn(() => {
        props.autofocus = true
      })
    })

    test('true', () => {
      expect(button.autofocus).toBeTruthy
    })
  })
})
