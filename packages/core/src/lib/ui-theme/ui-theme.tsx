import { ColorSchemeScript, createTheme, DEFAULT_THEME, Loader, MantineProvider } from '@mantine/core'
import { ModalsProvider } from '@mantine/modals'
import { Notifications } from '@mantine/notifications'
import { ReactNode, Suspense } from 'react'
import { UiColorSchemeProvider } from './ui-color-scheme-provider'

// Import the mantine theme styles
import './ui-theme-styles'

const theme = createTheme({
  colors: {
    brand: DEFAULT_THEME.colors.blue,
  },
  primaryColor: 'brand',
})

export function UiTheme({ children }: { children: ReactNode }) {
  return (
    <>
      <ColorSchemeScript defaultColorScheme="auto" />
      <MantineProvider theme={theme} defaultColorScheme="auto">
        <UiColorSchemeProvider>
          <ModalsProvider>
            <Notifications />
            <Suspense fallback={<Loader />}>{children}</Suspense>
          </ModalsProvider>
        </UiColorSchemeProvider>
      </MantineProvider>
    </>
  )
}
