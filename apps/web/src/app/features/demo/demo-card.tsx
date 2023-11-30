import { UiCard, UiStack } from '@pubkey-ui/core'

export function DemoCard({ children, title }: { children: React.ReactNode; title: string }) {
  return (
    <UiCard title={title}>
      <UiStack>{children}</UiStack>
    </UiCard>
  )
}
