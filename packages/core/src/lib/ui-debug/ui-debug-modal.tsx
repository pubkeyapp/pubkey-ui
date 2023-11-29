import { ActionIcon, Tooltip } from '@mantine/core'
import { modals } from '@mantine/modals'
import { IconBug } from '@tabler/icons-react'
import { UiDebug } from './ui-debug'

export function handleDebugModalClick({ data, title }: { data: string | unknown; title?: string }) {
  return modals.open({
    size: 'lg',
    title: title ?? 'Debug',
    children: <UiDebug data={data} open hideButton />,
  })
}

export function UiDebugModal({ data, title }: { data: string | unknown; title?: string }) {
  return (
    <Tooltip label="Show debug data">
      <ActionIcon color="brand" variant="subtle" onClick={() => handleDebugModalClick({ data, title })}>
        <IconBug size={16} />
      </ActionIcon>
    </Tooltip>
  )
}
