import { Group, GroupProps } from '@mantine/core'
import { ReactNode } from 'react'

export interface UiGroupProps extends GroupProps {
  children: ReactNode
}

export function UiGroup({ children, ...props }: UiGroupProps) {
  return <Group {...props}>{children}</Group>
}
