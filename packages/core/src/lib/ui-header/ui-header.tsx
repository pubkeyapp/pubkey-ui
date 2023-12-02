import { Anchor, Burger, Group } from '@mantine/core'
import { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { UiLogo, UiLogoType } from '../ui-logo'

import classes from './ui-header.module.css'

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
  const items = links.map((link) => (
    <Anchor component={Link} key={link.label} to={link.link} className={classes.link}>
      {link.label}
    </Anchor>
  ))

  const burger = toggle ? <Burger opened={opened} onClick={toggle} size="sm" hiddenFrom="md" /> : null

  return (
    <header className={classes.header}>
      <div className={classes.inner}>
        <Group>
          <Group>
            {burger}
            <Anchor component={Link} to={base ?? '/'} display="flex">
              <Group hiddenFrom="md">{logoSmall ?? <UiLogo height={28} />}</Group>
              <Group visibleFrom="md">{logo ?? <UiLogoType height={28} />}</Group>
            </Anchor>
          </Group>
          <Group gap={5} className={classes.links} visibleFrom="md">
            {items}
          </Group>
        </Group>

        <Group>{profile}</Group>
      </div>
    </header>
  )
}
