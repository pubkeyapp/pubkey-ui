import { Button, SimpleGrid } from '@mantine/core'
import { UiGroup } from '@pubkey-ui/core'
import { DemoCard } from './demo-card'

export function DemoFeatureGroup() {
  return (
    <DemoCard title="Group">
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
    </DemoCard>
  )
}
