import { Alert, AlertProps } from '@mantine/core'
import { IconAlertCircle, IconCheck, IconCircleX, IconInfoCircle } from '@tabler/icons-react'
import { ReactNode } from 'react'

export interface UiAlertProps extends AlertProps {
  message: ReactNode
  title: ReactNode
}

export function UiAlert({ message, ...props }: UiAlertProps) {
  return <Alert {...props}>{message}</Alert>
}

export function UiError({ ...props }: UiAlertProps) {
  return <UiAlert {...props} color="red" icon={props.icon ?? <IconCircleX />} />
}

export function UiInfo({ ...props }: UiAlertProps) {
  return <UiAlert {...props} color="blue" icon={props.icon ?? <IconInfoCircle />} />
}

export function UiSuccess({ ...props }: UiAlertProps) {
  return <UiAlert {...props} color="green" icon={props.icon ?? <IconCheck />} />
}

export function UiWarning({ ...props }: UiAlertProps) {
  return <UiAlert {...props} color="yellow" icon={props.icon ?? <IconAlertCircle />} />
}
