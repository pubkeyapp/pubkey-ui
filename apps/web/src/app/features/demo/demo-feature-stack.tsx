import { Button, SimpleGrid } from '@mantine/core'
import { UiStack } from '@pubkey-ui/core'
import { DemoUiCard } from './demo-ui-card'

export function DemoFeatureStack() {
  return (
    <DemoUiCard title="Stack">
      <SimpleGrid cols={2}>
        <UiStack justify="space-between">
          <Button>Save</Button> <Button variant="default">Cancel</Button>
        </UiStack>
        <UiStack gap="xs">
          <Button>Save</Button> <Button variant="default">Cancel</Button>
        </UiStack>
        <UiStack gap="sm">
          <Button>Save</Button> <Button variant="default">Cancel</Button>
        </UiStack>
        <UiStack gap="md">
          <Button>Save</Button> <Button variant="default">Cancel</Button>
        </UiStack>
        <UiStack gap="lg">
          <Button>Save</Button> <Button variant="default">Cancel</Button>
        </UiStack>
        <UiStack gap="xl">
          <Button>Save</Button> <Button variant="default">Cancel</Button>
        </UiStack>
      </SimpleGrid>
    </DemoUiCard>
  )
}
