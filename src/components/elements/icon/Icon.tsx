import type { Component } from 'solid-js'
import octicons from '@primer/octicons'

export type IconProps = {
  name: string
  height?: 12 | 16 | 24 | 48 | 96 | undefined
  width?: 12 | 16 | 24 | 48 | 96 | undefined
  css?: string | undefined
  ariaLabel?: string | undefined
}

export type OcticonOptions = {
  height?: 12 | 16 | 24 | 48 | 96
  width?: 12 | 16 | 24 | 48 | 96
  class?: string
  'aria-label'?: string
}

export const Icon: Component<IconProps> = (props) => {
  const toSvg = (): string => {
    const options: OcticonOptions = {}
    if (!props.width && props.height) options.height = props.height
    if (props.width) options.width = props.width
    if (props.css) options.class = props.css
    if (props.ariaLabel) options['aria-label'] = props.ariaLabel
    return octicons[props.name]?.toSVG(options) ?? ''
  }

  // eslint-disable-next-line solid/no-innerhtml
  return <span innerHTML={toSvg()} />
}
