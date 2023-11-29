import { Stack, StackProps } from '@mantine/core'
import { ReactNode } from 'react'

export interface UiStackProps extends StackProps {
  children: ReactNode
}

export function UiStack({ children, ...props }: UiStackProps) {
  return <Stack {...props}>{children}</Stack>
}
