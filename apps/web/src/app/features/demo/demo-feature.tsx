import { Grid, NavLink } from '@mantine/core'
import { UiNotFound, UiPage, UiStack } from '@pubkey-ui/core'
import { ReactNode } from 'react'
import { Link, Navigate, useLocation, useRoutes } from 'react-router-dom'
import { DemoFeatureAlerts } from './demo-feature-alerts'
import { DemoFeatureBack } from './demo-feature-back'
import { DemoFeatureCard } from './demo-feature-card'
import { DemoFeatureCopy } from './demo-feature-copy'
import { DemoFeatureDashboardGrid } from './demo-feature-dashboard-grid'
import { DemoFeatureDebug } from './demo-feature-debug'
import { DemoFeatureForm } from './demo-feature-form'
import { DemoFeatureGroup } from './demo-feature-group'
import { DemoFeatureHeader } from './demo-feature-header'
import { DemoFeatureLoader } from './demo-feature-loader'
import { DemoFeatureLogo } from './demo-feature-logo'
import { DemoFeatureMenu } from './demo-feature-menu'
import { DemoFeatureNotFound } from './demo-feature-not-found'
import { DemoFeaturePage } from './demo-feature-page'
import { DemoFeatureSearchInput } from './demo-feature-search-input'
import { DemoFeatureStack } from './demo-feature-stack'
import { DemoFeatureTabRoutes } from './demo-feature-tab-routes'
import { DemoFeatureTime } from './demo-feature-time'
import { DemoFeatureToast } from './demo-feature-toast'

export function DemoFeature() {
  const { pathname } = useLocation()
  const demos: {
    path: string
    label: string
    element: ReactNode
  }[] = [
    { path: 'alerts', label: 'Alerts', element: <DemoFeatureAlerts /> },
    { path: 'back', label: 'Back', element: <DemoFeatureBack /> },
    { path: 'card', label: 'Card', element: <DemoFeatureCard /> },
    { path: 'copy', label: 'Copy', element: <DemoFeatureCopy /> },
    { path: 'dashboard-grid', label: 'Dashboard Grid', element: <DemoFeatureDashboardGrid /> },
    { path: 'debug', label: 'Debug', element: <DemoFeatureDebug /> },
    { path: 'form', label: 'Form', element: <DemoFeatureForm /> },
    { path: 'group', label: 'Group', element: <DemoFeatureGroup /> },
    { path: 'header', label: 'Header', element: <DemoFeatureHeader /> },
    { path: 'loader', label: 'Loader', element: <DemoFeatureLoader /> },
    { path: 'logo', label: 'Logo', element: <DemoFeatureLogo /> },
    { path: 'menu', label: 'Menu', element: <DemoFeatureMenu /> },
    { path: 'not-found', label: 'Not Found', element: <DemoFeatureNotFound /> },
    { path: 'page', label: 'Page', element: <DemoFeaturePage /> },
    { path: 'search-input', label: 'Search Input', element: <DemoFeatureSearchInput /> },
    { path: 'stack', label: 'Stack', element: <DemoFeatureStack /> },
    { path: 'tab-routes', label: 'Tab Routes', element: <DemoFeatureTabRoutes /> },
    { path: 'time', label: 'Time', element: <DemoFeatureTime /> },
    { path: 'toast', label: 'Toast', element: <DemoFeatureToast /> },
  ]

  const routes = useRoutes([
    { index: true, element: <Navigate to={demos[0].path} replace /> },
    ...demos.map((demo) => ({ path: `${demo.path}/*`, element: demo.element })),
    { path: '*', element: <UiNotFound to="/demo" /> },
  ])

  return (
    <UiPage title="Demo">
      <Grid>
        <Grid.Col span={{ base: 12, sm: 2 }}>
          {demos.map((demo) => {
            const to = `/demo/${demo.path}`
            return (
              <NavLink active={pathname.startsWith(to)} component={Link} key={demo.path} label={demo.label} to={to} />
            )
          })}
        </Grid.Col>
        <Grid.Col span={{ base: 12, sm: 10 }}>
          <UiStack gap="xl">{routes}</UiStack>
        </Grid.Col>
      </Grid>
    </UiPage>
  )
}
