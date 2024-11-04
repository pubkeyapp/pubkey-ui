import { Button, rem } from '@mantine/core'
import { UiAvatar, UiCard, UiInfoItems, UiInfoTable, UiStack } from '@pubkey-ui/core'

export function DemoFeatureInfoTable() {
  const info: UiInfoItems = [
    ['Name', 'John Doe'],
    ['Email', 'john@example.com'],
    ['Phone', '555-555-5555'],
    ['Components', <Button variant="link">Edit</Button>],
    ['Avatar', <UiAvatar size={rem(40)} radius="xl" url="https://i.pravatar.cc/300" alt="John Doe" />],
  ]
  return (
    <UiCard title="InfoTable">
      <UiStack gap="xl">
        <UiInfoTable items={info} />
      </UiStack>
    </UiCard>
  )
}
