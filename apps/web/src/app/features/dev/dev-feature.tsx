import { UiContainer } from '@pubkey-ui/core'
import { DevFeatureActionGrid } from './dev-feature-action-grid'
import { DevFeatureLink } from './dev-feature-link'

export function DevFeature() {
  return (
    <UiContainer>
      <DevFeatureActionGrid />
      <DevFeatureLink />
    </UiContainer>
  )
}
