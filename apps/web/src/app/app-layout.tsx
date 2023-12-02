import { ActionIcon, Anchor, Box, Card, Group } from '@mantine/core'
import { UiContainer, UiLogoType, useUiColorScheme, useUiTheme } from '@pubkey-ui/core'
import { IconMoon, IconSun } from '@tabler/icons-react'
import { ReactNode } from 'react'
import { AccountChecker } from './features/account/account-ui'
import { ClusterChecker, ClusterUiSelect } from './features/cluster/cluster-ui'

export function AppLayout({ children }: { children: ReactNode }) {
  const { Link } = useUiTheme()
  return (
    <Box>
      <Card p="0" display="block">
        <UiContainer py="sm">
          <Group justify="space-between">
            <Group align="center">
              <Anchor component={Link} to="/" display="flex">
                <UiLogoType height={32} />
              </Anchor>
              <Anchor component={Link} to="/dashboard">
                Dashboard
              </Anchor>
              <Anchor component={Link} to="/account">
                Account
              </Anchor>
              <Anchor component={Link} to="/demo">
                Demo
              </Anchor>
              <Anchor component={Link} to="/dev">
                Dev
              </Anchor>
            </Group>
            <Group>
              <ClusterUiSelect />
              <ThemeToggle />
            </Group>
          </Group>
        </UiContainer>
      </Card>
      <ClusterChecker>
        <AccountChecker />
      </ClusterChecker>
      {children}
    </Box>
  )
}

function ThemeToggle() {
  const { toggleColorScheme, colorScheme } = useUiColorScheme()

  return (
    <Group justify="center">
      <ActionIcon onClick={() => toggleColorScheme()} variant="default" size="xl" aria-label="Toggle color scheme">
        {colorScheme === 'dark' ? <IconSun stroke={1.5} /> : <IconMoon stroke={1.5} />}
      </ActionIcon>
    </Group>
  )
}
