import { Button, Container, Group, Text, Title } from '@mantine/core'
import { UiStack } from '@pubkey-ui/core'

import { KeypairUiModal, KeypairUiTable } from './keypair-ui'
import { useKeypair } from './keypair-data-access'

export default function KeypairFeature() {
  const { generateKeypair } = useKeypair()
  return (
    <Container py="xl" my="xl">
      <UiStack gap="xl">
        <UiStack align="center" gap="xl">
          <Title order={2}>Keypairs</Title>
          <Text>Manage and select your Solana keypairs</Text>
          <Group>
            <Button onClick={generateKeypair}>Generate Keypair</Button>
            <KeypairUiModal />
          </Group>
        </UiStack>
        <KeypairUiTable />
      </UiStack>
    </Container>
  )
}
