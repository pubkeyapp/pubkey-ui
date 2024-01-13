import { Avatar, Group, rem } from '@mantine/core'
import { UiHeader, UiLayout, UiMenu, UiThemeSwitch } from '@pubkey-ui/core'
import { IconSettings, IconUser, IconUserCog } from '@tabler/icons-react'
import { ReactNode } from 'react'
import { AccountChecker } from './features/account/account-ui'
import { ClusterChecker, ClusterUiSelect } from './features/cluster/cluster-ui'
import { useDisclosure } from '@mantine/hooks'

export function AppLayout({ children }: { children: ReactNode }) {
  const [opened, { toggle }] = useDisclosure(false)
  return (
    <UiLayout
      header={
        <UiHeader
          opened={opened}
          toggle={toggle}
          links={[
            { label: 'Dashboard', link: '/dashboard' },
            { label: 'Account', link: '/account' },
            { label: 'Demo', link: '/demo' },
            { label: 'Dev', link: '/dev' },
          ]}
          profile={
            <Group>
              <ClusterUiSelect />
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
          }
        />
      }
    >
      <ClusterChecker>
        <AccountChecker />
      </ClusterChecker>
      {children}
    </UiLayout>
  )
}
