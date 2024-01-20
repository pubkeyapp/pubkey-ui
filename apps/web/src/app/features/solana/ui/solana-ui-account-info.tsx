import { AccountInfo, ParsedAccountData } from '@solana/web3.js'
import { UiDebugModal, UiGroup } from '@pubkey-ui/core'
import { Group, Text } from '@mantine/core'
import { SolanaUiSolPrice } from './solana-ui-sol-price'

export function SolanaUiAccountInfo({ data }: { data?: AccountInfo<Buffer | ParsedAccountData> | null }) {
  return (
    <UiGroup>
      <Group>
        <Text size="xs" c="dimmed">
          <SolanaUiSolPrice lamports={data?.lamports} /> SOL
        </Text>
      </Group>

      <UiDebugModal data={data} />
    </UiGroup>
  )
}
