import { Group, SimpleGrid } from '@mantine/core'
import { UiAvatar, UiCard } from '@pubkey-ui/core'

export function DemoFeatureAvatar() {
  return (
    <UiCard title="Avatar">
      <SimpleGrid cols={6}>
        <Group justify="center">
          <UiAvatar name="John Doe" tooltipLabel="John Doe" />
          <UiAvatar name="Jane Doe" tooltipLabel="Jane Doe" />
          <UiAvatar name="Jack Doe" tooltipLabel="Jack Doe" />
          <UiAvatar name="Jill Doe" tooltipLabel="Jill Doe" />
          <UiAvatar name="Jay Doe" tooltipLabel="Jay Doe" />
          <UiAvatar name="Joanne Doe" tooltipLabel="Joanne Doe" />
        </Group>
        <Group justify="center">
          <UiAvatar url={'https://avatars.githubusercontent.com/u/36491?v=4'} />
          <UiAvatar size="lg" url={'https://avatars.githubusercontent.com/u/36491?v=4'} />
          <UiAvatar
            to="https://github.com/beeman"
            size="lg"
            url={'https://avatars.githubusercontent.com/u/36491?v=4'}
          />
        </Group>
      </SimpleGrid>
    </UiCard>
  )
}
