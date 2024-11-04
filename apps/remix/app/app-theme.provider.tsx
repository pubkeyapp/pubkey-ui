import { ReactNode } from 'react'
import { themeWithBrand, UiThemeLink, UiThemeProvider } from '@pubkey-ui/core'
import { Link } from '@remix-run/react'

const theme = themeWithBrand('blue')

const ThemeLink: UiThemeLink = ({ children, ...props }) => <Link {...props}>{children}</Link>

export function AppThemeProvider({ children }: { children: ReactNode }) {
  return (
    <UiThemeProvider link={ThemeLink} theme={theme}>
      {children}
    </UiThemeProvider>
  )
}
