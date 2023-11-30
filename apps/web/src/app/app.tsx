import { UiThemeProvider } from '@pubkey-ui/core'
import { AppLayout } from './app-layout'
import { AppRoutes, ThemeLink } from './app-routes'

export function App() {
  return (
    <UiThemeProvider link={ThemeLink}>
      <AppLayout>
        <AppRoutes />
      </AppLayout>
    </UiThemeProvider>
  )
}
