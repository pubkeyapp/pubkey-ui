import { Card, Text } from '@mantine/core'
import { UiGroup, UiStack } from '@pubkey-ui/core'

export function DemoCard({ children, title }: { children: React.ReactNode; title: string }) {
  return (
    <Card>
      <UiGroup justify="space-between" mb="md">
        <Text size="lg" fw={700}>
          {title}
        </Text>
      </UiGroup>
      <UiStack>{children}</UiStack>
    </Card>
  )
}
