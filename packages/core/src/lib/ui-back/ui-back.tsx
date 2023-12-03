import { ActionIcon } from '@mantine/core'
import { IconArrowLeft } from '@tabler/icons-react'
import { useUiTheme } from '../ui-theme'

export function UiBack({ to = '../' }: { to?: string }) {
  const { Link } = useUiTheme()

  return (
    <ActionIcon color="brand" component={Link} to={to} variant="light">
      <IconArrowLeft />
    </ActionIcon>
  )
}
