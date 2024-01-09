import { Badge, SimpleGrid } from '@mantine/core'
import { UiCard, UiGridRoutes } from '@pubkey-ui/core'
import { IconDashboard } from '@tabler/icons-react'

export function DemoFeatureGridRoutes() {
  return (
    <UiCard title="Grid Routes">
      <UiGridRoutes
        basePath="/demo/grid-routes"
        routes={[
          {
            path: 'dashboard',
            label: 'Dashboard',
            leftSection: <IconDashboard />,
            rightSection: (
              <Badge size="xs" color="brand" variant="outline">
                New
              </Badge>
            ),
            element: (
              <SimpleGrid cols={2} spacing="md">
                <UiCard title="Dashboard">Dashboard</UiCard>
              </SimpleGrid>
            ),
          },
          {
            path: 'content',
            label: 'Content',
            element: (
              <SimpleGrid cols={2} spacing="md">
                <UiCard title="Content">Content</UiCard>
              </SimpleGrid>
            ),
            rightSection: (
              <Badge size="xs" color="brand" variant="outline">
                New
              </Badge>
            ),
          },
          {
            path: 'settings',
            label: 'Settings',
            element: (
              <SimpleGrid cols={2} spacing="md">
                <UiCard title="Settings">Settings</UiCard>
              </SimpleGrid>
            ),
          },
        ]}
      />
    </UiCard>
  )
}