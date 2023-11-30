import { UiCopy, UiStack } from '@pubkey-ui/core'
import { DemoCard } from './demo-card'

export function DemoFeatureCopy() {
  return (
    <DemoCard title="Copy">
      <UiStack>
        <UiCopy text="Hello PubKey UI" />
      </UiStack>
    </DemoCard>
  )
}
