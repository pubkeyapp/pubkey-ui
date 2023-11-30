import { UiContainer, UiStack } from '@pubkey-ui/core'
import { DemoFeatureAlerts } from './demo-feature-alerts'
import { DemoFeatureCard } from './demo-feature-card'
import { DemoFeatureCopy } from './demo-feature-copy'
import { DemoFeatureDebug } from './demo-feature-debug'
import { DemoFeatureGroup } from './demo-feature-group'
import { DemoFeatureSearchInput } from './demo-feature-search-input'
import { DemoFeatureStack } from './demo-feature-stack'
import { DemoFeatureTime } from './demo-feature-time'
import { DemoFeatureToast } from './demo-feature-toast'

export function DemoFeature() {
  return (
    <UiContainer>
      <UiStack>
        <DemoFeatureAlerts />
        <DemoFeatureCard />
        <DemoFeatureCopy />
        <DemoFeatureDebug />
        <DemoFeatureGroup />
        <DemoFeatureSearchInput />
        <DemoFeatureStack />
        <DemoFeatureTime />
        <DemoFeatureToast />
      </UiStack>
    </UiContainer>
  )
}
