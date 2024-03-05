import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { AppLayout } from './app-layout'
import { AppRoutes } from './app-routes'
import { ClusterProvider } from './features/cluster/cluster-data-access'
import { SolanaProvider } from './features/solana/solana-provider'
import { AppThemeProvider } from './app-theme.provider'

const client = new QueryClient()

export function App() {
  return (
    <QueryClientProvider client={client}>
      <AppThemeProvider>
        <ClusterProvider>
          <SolanaProvider>
            <AppLayout>
              <AppRoutes />
            </AppLayout>
          </SolanaProvider>
        </ClusterProvider>
      </AppThemeProvider>
    </QueryClientProvider>
  )
}
