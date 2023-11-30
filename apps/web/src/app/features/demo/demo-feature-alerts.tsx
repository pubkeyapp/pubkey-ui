import { SimpleGrid } from '@mantine/core'
import { UiAlert, UiError, UiInfo, UiSuccess, UiWarning } from '@pubkey-ui/core'
import { DemoCard } from './demo-card'

export function DemoFeatureAlerts() {
  return (
    <DemoCard title="Alerts">
      <SimpleGrid cols={2}>
        <UiError title="Error" message="Hello World" />
        <UiInfo title="Info" message="Hello World" />
        <UiSuccess title="Success" message="Hello World" />
        <UiWarning title="Warning" message="Hello World" />
        <UiAlert title="Alert" message="Hello World" />
      </SimpleGrid>
    </DemoCard>
  )
}
