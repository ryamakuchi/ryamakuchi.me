import type { Component, JSXElement } from 'solid-js'

export type ButtonProps = {
  type?: 'button' | 'submit' | 'reset'
  disabled?: boolean
  autofocus?: boolean
  children: JSXElement
  onClick: () => void
}

export const Button: Component<ButtonProps> = (props) => {
  return (
    <button
      type={props.type ?? 'button'}
      disabled={props.disabled ?? false}
      autofocus={props.autofocus ?? false}
      onClick={() => props.onClick()}
    >
      {props.children}
    </button>
  )
}
