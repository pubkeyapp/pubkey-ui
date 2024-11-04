import { Burger, Center, Container, Group, Menu } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import { IconBrandMantine, IconChevronDown } from '@tabler/icons-react'
import classes from './marketing-ui-header.module.css'
import { Link } from '@remix-run/react'

const links = [
  { to: '/about', label: 'Features' },
  {
    to: '#1',
    label: 'Learn',
    links: [
      { to: '/docs', label: 'Documentation' },
      { to: '/resources', label: 'Resources' },
      { to: '/community', label: 'Community' },
      { to: '/blog', label: 'Blog' },
    ],
  },
  { to: '/about', label: 'About' },
  { to: '/demo', label: 'Demo' },
  { to: '/pricing', label: 'Pricing' },
  {
    to: '#2',
    label: 'Support',
    links: [
      { to: '/faq', label: 'FAQ' },
      { to: '/demo', label: 'Book a demo' },
      { to: '/forums', label: 'Forums' },
    ],
  },
]

export function MarketingUiHeader() {
  const [opened, { toggle }] = useDisclosure(false)

  const items = links.map((link) => {
    const menuItems = link.links?.map((item) => <Menu.Item key={item.to}>{item.label}</Menu.Item>)

    if (menuItems) {
      return (
        <Menu key={link.label} trigger="hover" transitionProps={{ exitDuration: 0 }} withinPortal>
          <Menu.Target>
            <Link to={link.to} className={classes.link}>
              <Center>
                <span className={classes.linkLabel}>{link.label}</span>
                <IconChevronDown size="0.9rem" stroke={1.5} />
              </Center>
            </Link>
          </Menu.Target>
          <Menu.Dropdown>{menuItems}</Menu.Dropdown>
        </Menu>
      )
    }

    return (
      <Link key={link.label} to={link.to} className={classes.link}>
        {link.label}
      </Link>
    )
  })

  return (
    <header className={classes.header}>
      <Container size="md">
        <div className={classes.inner}>
          <IconBrandMantine size={28} />
          <Group gap={5} visibleFrom="sm">
            {items}
          </Group>
          <Burger opened={opened} onClick={toggle} size="sm" hiddenFrom="sm" />
        </div>
      </Container>
    </header>
  )
}
