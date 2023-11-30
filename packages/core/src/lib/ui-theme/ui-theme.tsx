import { createTheme, DEFAULT_THEME, Loader, MantineProvider } from '@mantine/core'
import { ReactNode, Suspense } from 'react'
import { Notifications } from '@mantine/notifications'
import { ModalsProvider } from '@mantine/modals'

// Core styles
import '@mantine/core/styles.css'
// Package styles
import '@mantine/dates/styles.css'
import '@mantine/notifications/styles.css'

export interface UiThemeProps {
  children: ReactNode
}

const theme = createTheme({
  colors: {
    brand: DEFAULT_THEME.colors.blue,
  },
  primaryColor: 'brand',
})

export function UiTheme({ children }: UiThemeProps) {
  return (
    <MantineProvider theme={theme} defaultColorScheme="dark">
      <ModalsProvider>
        <Notifications />
        <Suspense fallback={<Loader />}>{children}</Suspense>
      </ModalsProvider>
    </MantineProvider>
  )
}