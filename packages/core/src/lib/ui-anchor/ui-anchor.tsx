import { Anchor, AnchorProps } from '@mantine/core'
import { ReactNode } from 'react'
import { useUiTheme } from '../ui-theme'

export interface UiAnchorProps extends AnchorProps {
  children: ReactNode
  href?: string
  to?: string
  target?: HTMLAnchorElement['target']
}

export function UiAnchor({ children, href, target, to, ...props }: UiAnchorProps) {
  const { Link } = useUiTheme()
  return to ? (
    <Anchor component={Link} to={to} target={target} {...props}>
      {children}
    </Anchor>
  ) : href ? (
    <Anchor component="a" href={href} target={target} {...props}>
      {children}
    </Anchor>
  ) : (
    children
  )
}
