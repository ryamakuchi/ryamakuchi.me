import { render } from 'solid-js/web'

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  a11y: {
    config: {},
    options: {
      checks: { 'color-contrast': { options: { noScroll: true } } },
      restoreScroll: true,
    },
  },
}

export const decorators = [
  (Story) => {
    const solidRoot = document.createElement('div')
    render(Story, solidRoot)
    return solidRoot
  },
]
