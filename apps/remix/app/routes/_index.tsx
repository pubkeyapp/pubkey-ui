import type { MetaFunction } from '@remix-run/node'
import { MarketingIndexFeature } from '~/features/marketing/feature/marketing-index-feature'

export const meta: MetaFunction = () => {
  return [{ title: 'New Remix App' }, { name: 'description', content: 'Welcome to Remix!' }]
}

export default function Index() {
  return <MarketingIndexFeature />
}
