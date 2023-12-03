import { Box, Group, Title } from '@mantine/core'
import { UiContainer, UiGroup, UiStack } from '@pubkey-ui/core'
import { ReactNode } from 'react'

export function UiPage({
  children,
  leftAction,
  rightAction,
  title,
}: {
  children: ReactNode
  leftAction?: ReactNode
  rightAction?: ReactNode
  title?: ReactNode
}) {
  return (
    <UiContainer>
      <UiStack>
        <Box>
          <UiGroup>
            <Group>
              {leftAction ? leftAction : null}
              <Title order={2}>{title ?? ''}</Title>
            </Group>
            {rightAction ? <Group>{rightAction}</Group> : null}
          </UiGroup>
        </Box>
        <UiStack my="xs" gap="xl">
          {children}
        </UiStack>
      </UiStack>
    </UiContainer>
  )
}
