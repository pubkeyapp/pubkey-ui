import { UiThemeProvider } from '@pubkey-ui/core'
import { Link } from 'react-router-dom'
import { AppLayout } from './app-layout'

import { AppRoutes } from './app-routes'

export function App() {
  return (
    <UiThemeProvider link={({ children, ...props }) => <Link {...props}>{children}</Link>}>
      <AppLayout>
        <AppRoutes />
      </AppLayout>
    </UiThemeProvider>
  )
}
