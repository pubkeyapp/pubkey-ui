import { SimpleGrid } from '@mantine/core'
import { UiCard, UiGridRoutes } from '@pubkey-ui/core'

export function DemoFeatureGridRoutes() {
  return (
    <UiCard title="Grid Routes">
      <UiGridRoutes
        basePath="/demo/grid-routes"
        routes={[
          {
            path: 'overview',
            label: 'Overview',
            element: (
              <SimpleGrid cols={2} spacing="md">
                <UiCard title="Overview">Overview</UiCard>
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
