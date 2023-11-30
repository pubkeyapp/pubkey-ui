import { Anchor, Button } from '@mantine/core'
import { UiCard, UiContainer, useUiTheme } from '@pubkey-ui/core'

export function DevFeatureLink() {
  const { Link } = useUiTheme()
  return (
    <UiContainer>
      <UiCard>TEST</UiCard>
      <Anchor component={Link} to="/demo">
        Go to demo
      </Anchor>
      <Button component={Link} to="/demo">
        Go to demo
      </Button>
    </UiContainer>
  )
}
