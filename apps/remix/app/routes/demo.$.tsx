import { AppLayout } from '../app-layout'
import { DemoFeature } from '../features/demo/demo-feature'

export default function DemoLayoutRoute() {
  return (
    <AppLayout>
      <DemoFeature />
    </AppLayout>
  )
}
