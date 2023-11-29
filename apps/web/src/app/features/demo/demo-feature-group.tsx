import { Button, SimpleGrid } from '@mantine/core'
import { UiGroup } from '@pubkey-ui/core'
import { DemoUiCard } from './demo-ui-card'

export function DemoFeatureGroup() {
  return (
    <DemoUiCard title="Group">
      <SimpleGrid cols={2}>
        <UiGroup justify="space-between">
          <Button>Save</Button> <Button variant="default">Cancel</Button>
        </UiGroup>
        <UiGroup gap="xs">
          <Button>Save</Button> <Button variant="default">Cancel</Button>
        </UiGroup>
        <UiGroup gap="sm">
          <Button>Save</Button> <Button variant="default">Cancel</Button>
        </UiGroup>
        <UiGroup gap="md">
          <Button>Save</Button> <Button variant="default">Cancel</Button>
        </UiGroup>
        <UiGroup gap="lg">
          <Button>Save</Button> <Button variant="default">Cancel</Button>
        </UiGroup>
        <UiGroup gap="xl">
          <Button>Save</Button> <Button variant="default">Cancel</Button>
        </UiGroup>
      </SimpleGrid>
    </DemoUiCard>
  )
}
