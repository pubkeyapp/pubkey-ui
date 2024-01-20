import { useSolanaGetAccountInfo } from '../solana-data-access'
import { UiLoader, UiWarning } from '@pubkey-ui/core'
import { Stack } from '@mantine/core'
import { ExplorerLink } from '../../cluster/cluster-ui'

import { SolanaUiAccountInfo } from './solana-ui-account-info'

export function SolanaUiGetAccountInfo({ address }: { address: string }) {
  const query = useSolanaGetAccountInfo({ address })

  return query.isLoading ? (
    <UiLoader />
  ) : query.data?.value ? (
    <Stack gap={0}>
      <SolanaUiAccountInfo data={query.data.value} />
      <ExplorerLink size="xs" c="brand" path={`address/${address}`} />
    </Stack>
  ) : (
    <UiWarning message={`No data for address ${address}`} />
  )
}
