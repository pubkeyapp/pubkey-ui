import { UiThemeProvider } from '@pubkey-ui/core'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { AppLayout } from './app-layout'
import { AppRoutes, ThemeLink } from './app-routes'
import { ClusterProvider } from './features/cluster/cluster-data-access'
import { SolanaProvider } from './features/solana/solana-provider'
import { KeypairProvider } from './features/keypair/keypair-data-access'

const client = new QueryClient()

export function App() {
  return (
    <QueryClientProvider client={client}>
      <UiThemeProvider link={ThemeLink}>
        <KeypairProvider>
          <ClusterProvider>
            <SolanaProvider>
              <AppLayout>
                <AppRoutes />
              </AppLayout>
            </SolanaProvider>
          </ClusterProvider>
        </KeypairProvider>
      </UiThemeProvider>
    </QueryClientProvider>
  )
}
