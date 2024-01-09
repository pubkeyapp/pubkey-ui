import { SimpleGrid } from '@mantine/core'
import { UiCard, UiTabRoutes } from '@pubkey-ui/core'

export function DemoFeatureTabRoutes() {
  return (
    <UiCard title="Tab Routes">
      <UiTabRoutes
        basePath="/demo/tab-routes"
        tabs={[
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
