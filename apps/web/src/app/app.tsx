import { UiThemeProvider } from '@pubkey-ui/core'
import { AppLayout } from './app-layout'
import { AppRoutes, ThemeLink } from './app-routes'
import { ClusterProvider } from './features/cluster/cluster-data-access'
import { SolanaProvider } from './features/solana/solana-provider'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const client = new QueryClient()

export function App() {
  return (
    <QueryClientProvider client={client}>
      <ClusterProvider>
        <SolanaProvider>
          <UiThemeProvider link={ThemeLink}>
            <AppLayout>
              <AppRoutes />
            </AppLayout>
          </UiThemeProvider>
        </SolanaProvider>
      </ClusterProvider>
    </QueryClientProvider>
  )
}
