import { SimpleGrid } from '@mantine/core'
import { UiCard, UiAlert, UiError, UiInfo, UiSuccess, UiWarning } from '@pubkey-ui/core'

export function DemoFeatureAlerts() {
  return (
    <UiCard title="Alerts">
      <SimpleGrid cols={2}>
        <UiError title="Error" message="Hello World" />
        <UiInfo title="Info" message="Hello World" />
        <UiSuccess title="Success" message="Hello World" />
        <UiWarning title="Warning" message="Hello World" />
        <UiAlert title="Alert" message="Hello World" />
      </SimpleGrid>
    </UiCard>
  )
}
