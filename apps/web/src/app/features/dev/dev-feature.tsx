import { UiContainer } from '@pubkey-ui/core'
import { DevFeatureLink } from './dev-feature-link'
import { DevFeatureActionGrid } from './dev-feature-action-grid'

export function DevFeature() {
  return (
    <UiContainer>
      <DevFeatureActionGrid />
      <DevFeatureLink />
    </UiContainer>
  )
}
