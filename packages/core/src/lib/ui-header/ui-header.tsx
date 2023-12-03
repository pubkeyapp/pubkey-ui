import { Anchor, Box, Burger, Flex, Group, rem } from '@mantine/core'
import { ReactNode } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { UiLogo, UiLogoType } from '../ui-logo'
import { useUiColorScheme } from '../ui-theme'

export interface UiHeaderProps {
  base?: string
  logo?: ReactNode
  logoSmall?: ReactNode
  links?: UiHeaderLink[]
  opened?: boolean
  profile?: ReactNode
  toggle?: () => void
}
export interface UiHeaderLink {
  link: string
  label: string
}

export function UiHeader({ base, links = [], logo, logoSmall, opened, profile, toggle }: UiHeaderProps) {
  const { colorScheme } = useUiColorScheme()
  const isDark = colorScheme === 'dark'
  const { pathname } = useLocation()
  const items = links.map((link) => {
    const active = pathname.startsWith(link.link)
    const linkColor = isDark ? 'gray.4' : 'dark.8'
    const activeLinkColor = isDark ? 'brand.6' : 'brand.4'

    return (
      <Anchor
        component={Link}
        key={link.label}
        to={link.link}
        display="block"
        bg={active ? (isDark ? 'dark.6' : 'gray.0') : 'transparent'}
        c={active ? activeLinkColor : linkColor}
        fw={500}
        fz={rem(14)}
        lh={1}
        p={`${rem(8)} ${rem(12)}`}
        style={{
          borderRadius: rem(4),
          textDecoration: 'none',
        }}
      >
        {link.label}
      </Anchor>
    )
  })

  const burger = toggle ? <Burger opened={opened} onClick={toggle} size="sm" hiddenFrom="md" /> : null

  return (
    <Box component="header" px="md" h={rem(56)} bg={isDark ? 'dark.9' : 'white'}>
      <Flex justify="space-between" align="center" style={{ height: rem(56) }}>
        <Group>
          <Group>
            {burger}
            <Anchor component={Link} to={base ?? '/'} display="flex">
              <Group hiddenFrom="md">{logoSmall ?? <UiLogo height={28} />}</Group>
              <Group visibleFrom="md">{logo ?? <UiLogoType height={28} />}</Group>
            </Anchor>
          </Group>
          <Group gap={5} visibleFrom="md">
            {items}
          </Group>
        </Group>

        <Group>{profile}</Group>
      </Flex>
    </Box>
  )
}
