import { SimpleGrid } from '@mantine/core'
import { UiCard, UiLogoType, UiLogoTypeBlack, UiLogoTypeWhite } from '@pubkey-ui/core'

export function DemoFeatureLogo() {
  return (
    <UiCard title="Logo">
      <SimpleGrid cols={2}>
        <UiLogoType height={64} />
        <UiLogoTypeBlack height={64} />
        <UiLogoTypeWhite height={64} />
      </SimpleGrid>
    </UiCard>
  )
}
