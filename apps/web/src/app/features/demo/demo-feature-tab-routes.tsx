import { SimpleGrid } from '@mantine/core'
import { UiCard, UiTabRoutes } from '@pubkey-ui/core'

export function DemoFeatureTabRoutes() {
  return (
    <UiCard title="Tab Routes">
      <UiTabRoutes
        baseUrl="/demo/tab-routes"
        tabs={[
          {
            value: 'overview',
            label: 'Overview',
            component: (
              <SimpleGrid cols={2} spacing="md">
                <UiCard title="Overview">Overview</UiCard>
              </SimpleGrid>
            ),
          },
          {
            value: 'content',
            label: 'Content',
            component: (
              <SimpleGrid cols={2} spacing="md">
                <UiCard title="Content">Content</UiCard>
              </SimpleGrid>
            ),
          },
          {
            value: 'settings',
            label: 'Settings',
            component: (
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
