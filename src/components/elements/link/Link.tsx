import type { Component, JSXElement } from 'solid-js'

export type LinkProps = {
  href: string
  children: JSXElement
}

export const Link: Component<LinkProps> = (props) => {
  return (
    <a href={props.href} target="_blank" rel="noreferrer noopener">
      {props.children}
    </a>
  )
}
