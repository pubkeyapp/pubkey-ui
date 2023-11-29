import { UiCopy, UiStack } from '@pubkey-ui/core'
import { DemoUiCard } from './demo-ui-card'

export function DemoFeatureCopy() {
  return (
    <DemoUiCard title="Copy">
      <UiStack>
        <UiCopy text="Hello PubKey UI" />
      </UiStack>
    </DemoUiCard>
  )
}
