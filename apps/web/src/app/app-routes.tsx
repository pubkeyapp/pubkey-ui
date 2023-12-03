import { UiNotFound, UiThemeLink } from '@pubkey-ui/core'
import { lazy } from 'react'
import { Link, Navigate, RouteObject, useRoutes } from 'react-router-dom'
import { DemoFeature } from './features'
import { DashboardFeature } from './features/dashboard/dashboard-feature'
import { DevFeature } from './features/dev/dev-feature'

const AccountList = lazy(() => import('./features/account/account-list-feature'))
const AccountDetail = lazy(() => import('./features/account/account-detail-feature'))
const ClusterFeature = lazy(() => import('./features/cluster/cluster-feature'))

const routes: RouteObject[] = [
  { path: '/', element: <Navigate to="/dashboard" replace /> },
  { path: '/account', element: <AccountList /> },
  { path: '/account/:address', element: <AccountDetail /> },
  { path: '/clusters', element: <ClusterFeature /> },
  { path: '/dashboard', element: <DashboardFeature /> },
  { path: '/demo/*', element: <DemoFeature /> },
  { path: '/dev', element: <DevFeature /> },
  { path: '*', element: <UiNotFound /> },
]

export function AppRoutes() {
  return useRoutes(routes)
}

export const ThemeLink: UiThemeLink = ({ children, ...props }) => <Link {...props}>{children}</Link>
