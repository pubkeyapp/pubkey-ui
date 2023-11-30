import { Navigate, RouteObject, useRoutes } from 'react-router-dom'
import { DemoFeature } from './features'
import { DashboardFeature } from './features/dashboard/dashboard-feature'
import { DevFeature } from './features/dev/dev-feature'

const routes: RouteObject[] = [
  { path: '/', element: <Navigate to="/dashboard" replace /> },
  { path: '/dashboard', element: <DashboardFeature /> },
  { path: '/demo', element: <DemoFeature /> },
  { path: '/dev', element: <DevFeature /> },
]

export function AppRoutes() {
  return useRoutes(routes)
}
