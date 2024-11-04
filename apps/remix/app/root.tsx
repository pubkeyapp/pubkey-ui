import '@mantine/core/styles.css'
import { ColorSchemeScript } from '@mantine/core'
import { Links, Meta, Outlet, Scripts, ScrollRestoration } from '@remix-run/react'
import { AppThemeProvider } from './app-theme.provider'
import './styles.css'

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" data-mantine-color-scheme="dark">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
        <ColorSchemeScript defaultColorScheme="dark" />
      </head>
      <body>
        <AppThemeProvider>{children}</AppThemeProvider>
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  )
}

export default function App() {
  return <Outlet />
}
