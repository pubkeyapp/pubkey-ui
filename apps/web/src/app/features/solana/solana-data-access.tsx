import { PublicKey } from '@solana/web3.js'
import { useConnection } from '@solana/wallet-adapter-react'
import { useQuery } from '@tanstack/react-query'
import { useMemo } from 'react'

export function useSolanaQueries({ address }: { address: string }) {
  const { connection } = useConnection()
  const publicKey = useMemo(() => new PublicKey(address), [address])

  return {
    getAccountInfo: {
      queryKey: ['getAccountInfo', { endpoint: connection?.rpcEndpoint, publicKey }],
      queryFn: () => connection.getParsedAccountInfo(publicKey),
    },
  }
}

export function useSolanaGetAccountInfo({ address }: { address: string }) {
  return useQuery(useSolanaQueries({ address }).getAccountInfo)
}
