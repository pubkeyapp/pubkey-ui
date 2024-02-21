import { useState } from 'react'
import { UiCard, UiStack } from '@pubkey-ui/core'
import { SolanaUiAddressInput } from './ui/solana-ui-address-input'
import { SolanaUiGetAccountInfo } from './ui/solana-ui-get-account-info'

export function SolanaAccountInfoFeature() {
  const [address, setAddress] = useState('')

  return (
    <UiCard>
      <UiStack>
        <SolanaUiAddressInput address={address} setAddress={setAddress} />
        {address?.length ? <SolanaUiGetAccountInfo address={address} /> : null}
      </UiStack>
    </UiCard>
  )
}
