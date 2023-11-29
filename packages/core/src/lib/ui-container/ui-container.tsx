import { Container, ContainerProps } from '@mantine/core'
import { ReactNode } from 'react'

export interface UiContainerProps extends ContainerProps {
  children: ReactNode
}

export function UiContainer({ children, ...props }: UiContainerProps) {
  return <Container {...props}>{children}</Container>
}
