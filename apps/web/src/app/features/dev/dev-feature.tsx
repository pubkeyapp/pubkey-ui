import { UiContainer } from '@pubkey-ui/core'
import { DevFeatureLink } from './dev-feature-link'
import { DevFeatureLogo } from './dev-feature-logo'

export function DevFeature() {
  return (
    <UiContainer>
      <DevFeatureLogo />
      <DevFeatureLink />
    </UiContainer>
  )
}
