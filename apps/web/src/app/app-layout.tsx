import { ActionIcon, Anchor, Box, Card, Group, Text } from '@mantine/core'
import { UiContainer, useUiColorScheme, useUiTheme } from '@pubkey-ui/core'
import { IconMoon, IconSun } from '@tabler/icons-react'
import { ReactNode } from 'react'

export function AppLayout({ children }: { children: ReactNode }) {
  const { Link } = useUiTheme()
  return (
    <Box>
      <Card p="0" display="block">
        <UiContainer py="sm">
          <Group justify="space-between">
            <Group>
              <Text component={Link} to="/" size="xl" fw={700}>
                Pubkey UI
              </Text>
              <Anchor component={Link} to="/dashboard">
                Dashboard
              </Anchor>
              <Anchor component={Link} to="/demo">
                Demo
              </Anchor>
              <Anchor component={Link} to="/dev">
                Dev
              </Anchor>
            </Group>
            <ThemeToggle />
          </Group>
        </UiContainer>
      </Card>
      {children}
    </Box>
  )
}

function ThemeToggle() {
  const { toggleColorScheme, colorScheme } = useUiColorScheme()

  return (
    <Group justify="center">
      <ActionIcon onClick={() => toggleColorScheme()} variant="default" size="xl" aria-label="Toggle color scheme">
        {colorScheme === 'dark' ? <IconSun className={''} stroke={1.5} /> : <IconMoon className={''} stroke={1.5} />}
      </ActionIcon>
    </Group>
  )
}
