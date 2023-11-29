import { UiContainer, UiStack } from '@pubkey-ui/core'
import { DemoFeatureAlerts } from './demo-feature-alerts'
import { DemoFeatureCopy } from './demo-feature-copy'
import { DemoFeatureDebug } from './demo-feature-debug'
import { DemoFeatureGroup } from './demo-feature-group'
import { DemoFeatureStack } from './demo-feature-stack'

export function DemoFeature() {
  return (
    <UiContainer py="lg">
      <UiStack>
        <DemoFeatureAlerts />
        <DemoFeatureCopy />
        <DemoFeatureDebug />
        <DemoFeatureGroup />
        <DemoFeatureStack />
      </UiStack>
    </UiContainer>
  )
}
