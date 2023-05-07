import type { JSXElement } from 'solid-js'
import { render as renderFn } from 'solid-testing-library'

export const render = <E extends HTMLElement>(ui: () => JSXElement) => {
  const { container, unmount } = renderFn(ui)
  return {
    element: container as E,
    unmountFn: unmount,
  }
}

export const sample = <A extends unknown[]>(array: A): A[number] => {
  return array[Math.floor(Math.random() * array.length)]
}
