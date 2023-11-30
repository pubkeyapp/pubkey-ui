import {
  UiCard,
  UiContainer,
  UiGroup,
  UiLogo,
  UiLogoType,
  UiLogoTypeBlack,
  UiLogoTypeWhite,
  UiStack,
} from '@pubkey-ui/core'

export function DevFeatureLogo() {
  return (
    <UiContainer>
      <UiCard title="Logos">
        <UiGroup>
          <UiLogo height={16} />
          <UiLogo height={32} />
          <UiLogo height={64} />
          <UiLogo height={128} />
        </UiGroup>
        <UiStack>
          <UiLogoType height={64} />
          <UiLogoTypeBlack height={64} />
          <UiLogoTypeWhite height={64} />
        </UiStack>
      </UiCard>
    </UiContainer>
  )
}
