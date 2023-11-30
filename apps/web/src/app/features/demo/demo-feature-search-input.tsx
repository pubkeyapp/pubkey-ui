import { SimpleGrid } from '@mantine/core'
import { UiGroup, UiSearchInput } from '@pubkey-ui/core'
import { DemoCard } from './demo-card'

export function DemoFeatureSearchInput() {
  return (
    <DemoCard title="SearchInput">
      <SimpleGrid cols={2}>
        <UiSearchInput />
        <UiSearchInput icon={{ radius: 0 }} text={{ radius: 0 }} />
      </SimpleGrid>

      <UiSearchInput />

      <UiGroup>
        <UiSearchInput />
        <UiSearchInput />
        <UiSearchInput />
        <UiSearchInput />
      </UiGroup>
    </DemoCard>
  )
}
