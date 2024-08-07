import { Button, Container, Group, Text } from '@mantine/core'
import { IconBrandGithub } from '@tabler/icons-react'

import classes from './marketing-ui-hero.module.css'

export function MarketingUiHero() {
  return (
    <div className={classes.wrapper}>
      <Container size={700} className={classes.inner}>
        <h1 className={classes.title}>
          A{' '}
          <Text component="span" variant="gradient" gradient={{ from: 'blue', to: 'cyan' }} inherit>
            fully featured
          </Text>{' '}
          React components and hooks library
        </h1>

        <Text className={classes.description} color="dimmed">
          Build fully functional accessible web applications with ease – Mantine includes more than 100 customizable
          components and hooks to cover you in any situation
        </Text>

        <Group className={classes.controls}>
          <Button size="xl" className={classes.control} variant="gradient" gradient={{ from: 'blue', to: 'cyan' }}>
            Get started
          </Button>

          <Button
            component="a"
            href="https://github.com/mantinedev/mantine"
            size="xl"
            variant="default"
            className={classes.control}
            leftSection={<IconBrandGithub size={20} />}
          >
            GitHub
          </Button>
        </Group>
      </Container>
    </div>
  )
}
