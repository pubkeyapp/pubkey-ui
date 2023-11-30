import { Button, SimpleGrid } from '@mantine/core'
import { toastError, toastInfo, toastSuccess, toastWarning } from '@pubkey-ui/core'
import { DemoCard } from './demo-card'

export function DemoFeatureToast() {
  return (
    <DemoCard title="Toast">
      <SimpleGrid cols={2}>
        <Button color="green" onClick={() => toastSuccess('This is a success toast')}>
          Toast Success
        </Button>
        <Button color="red" onClick={() => toastError('This is an error toast')}>
          Toast Error
        </Button>
        <Button color="yellow" onClick={() => toastWarning('This is a warning toast')}>
          Toast Warning
        </Button>
        <Button color="cyan" onClick={() => toastInfo('This is an info toast')}>
          Toast Info
        </Button>
      </SimpleGrid>
    </DemoCard>
  )
}
