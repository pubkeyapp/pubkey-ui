import { SimpleGrid } from '@mantine/core'
import { UiDebug, UiDebugModal } from '@pubkey-ui/core'
import { DemoCard } from './demo-card'

export function DemoFeatureDebug() {
  return (
    <DemoCard title="Debug">
      <SimpleGrid cols={2}>
        <UiDebug data={{ foo: 'bar' }} open hideButton />
        <UiDebug data={{ foo: 'bar' }} />
        <UiDebug data={{ foo: 'bar' }} open />
        <UiDebugModal data={{ foo: 'bar' }} />
      </SimpleGrid>
    </DemoCard>
  )
}
