import { Button, SimpleGrid } from '@mantine/core'
import { UiCard, UiGroup } from '@pubkey-ui/core'

export function DemoFeatureGroup() {
  return (
    <UiCard title="Group">
      <SimpleGrid cols={2}>
        <UiGroup>
          <Button>Save</Button> <Button variant="outline">Reset</Button> <Button variant="default">Cancel</Button>
        </UiGroup>
        <UiGroup justify="flex-end">
          <Button>Save</Button> <Button variant="outline">Reset</Button> <Button variant="default">Cancel</Button>
        </UiGroup>
        <UiGroup justify="flex-start" gap="xs">
          <Button>Save</Button> <Button variant="outline">Reset</Button> <Button variant="default">Cancel</Button>
        </UiGroup>
        <UiGroup justify="flex-start" gap="sm">
          <Button>Save</Button> <Button variant="outline">Reset</Button> <Button variant="default">Cancel</Button>
        </UiGroup>
        <UiGroup justify="flex-start" gap="md">
          <Button>Save</Button> <Button variant="outline">Reset</Button> <Button variant="default">Cancel</Button>
        </UiGroup>
        <UiGroup justify="flex-start" gap="lg">
          <Button>Save</Button> <Button variant="outline">Reset</Button> <Button variant="default">Cancel</Button>
        </UiGroup>
        <UiGroup justify="flex-start" gap="xl">
          <Button>Save</Button> <Button variant="outline">Reset</Button> <Button variant="default">Cancel</Button>
        </UiGroup>
      </SimpleGrid>
    </UiCard>
  )
}
