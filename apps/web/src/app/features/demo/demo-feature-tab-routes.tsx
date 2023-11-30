import { SimpleGrid } from '@mantine/core'
import { UiCard, UiTabRoutes } from '@pubkey-ui/core'
import { DemoCard } from './demo-card'

export function DemoFeatureTabRoutes() {
  return (
    <DemoCard title="Time">
      <UiTabRoutes
        baseUrl="/demo"
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
    </DemoCard>
  )
}
