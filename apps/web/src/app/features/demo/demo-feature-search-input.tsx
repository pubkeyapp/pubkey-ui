import { SimpleGrid } from '@mantine/core'
import { UiCard, UiGroup, UiSearchInput } from '@pubkey-ui/core'

export function DemoFeatureSearchInput() {
  return (
    <UiCard title="SearchInput">
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
    </UiCard>
  )
}
