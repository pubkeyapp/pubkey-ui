import { Avatar, Box, Group, rem } from '@mantine/core'
import { UiHeader, UiHeaderLink, UiLayout, UiMenu, UiThemeSwitch } from '@pubkey-ui/core'
import { IconSettings, IconUser, IconUserCog } from '@tabler/icons-react'
import { ReactNode } from 'react'
import { useDisclosure } from '@mantine/hooks'
import { AccountChecker } from './features/account/account-ui'
import { ClusterChecker, ClusterUiSelect } from './features/cluster/cluster-ui'
import { AppThemeSelect } from './app-theme.provider'

const links: UiHeaderLink[] = [
  { label: 'Dashboard', link: '/dashboard' },
  { label: 'Account', link: '/account' },
  { label: 'Demo', link: '/demo' },
  { label: 'Dev', link: '/dev' },
  { label: 'Playground', link: '/playground' },
  { label: 'Themes', link: '/themes' },
]
export function AppLayout({ children }: { children: ReactNode }) {
  const [opened, { toggle }] = useDisclosure(false)
  const profile = (
    <Group>
      <ClusterUiSelect />
      <AppThemeSelect />
      <UiThemeSwitch />
      <UiMenu
        position="bottom-end"
        withArrow
        arrowOffset={14}
        icon={
          <Avatar src="https://avatars.githubusercontent.com/u/36491?v=4" size={32}>
            <IconUser />
          </Avatar>
        }
        items={[
          { label: 'Account', type: 'label' },
          {
            label: 'Settings',
            type: 'item',
            leftSection: <IconSettings style={{ width: rem(14), height: rem(14) }} />,
          },
          {
            label: 'Profile',
            type: 'item',
            leftSection: <IconUserCog style={{ width: rem(14), height: rem(14) }} />,
          },
        ]}
      />
    </Group>
  )
  return (
    <UiLayout
      padding={0}
      styles={{ root: { height: '100%' }, main: { height: '100%' } }}
      header={<UiHeader opened={opened} toggle={toggle} links={links} profile={profile} />}
    >
      <Box style={{ height: '100%', overflow: 'auto' }}>
        <ClusterChecker>
          <AccountChecker />
        </ClusterChecker>
        {children}
      </Box>
    </UiLayout>
  )
}
