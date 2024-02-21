import { ActionIcon, Anchor, Button, Group, Modal, Table, Text, TextInput } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import { IconCurrencySolana, IconTrash } from '@tabler/icons-react'
import { useState } from 'react'
import { useKeypair } from './keypair-data-access'
import { UiAlert, UiDebugModal } from '@pubkey-ui/core'

export function KeypairUiModal() {
  const { addKeypair } = useKeypair()
  const [opened, { close, open }] = useDisclosure(false)
  const [name, setName] = useState('')

  return (
    <>
      <Button onClick={open}>Add Keypair</Button>
      <Modal opened={opened} onClose={close} title="Add Keypair">
        <TextInput type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />

        <Button
          onClick={() => {
            addKeypair({ name, publicKey: '', secretKey: '' })
            close()
          }}
        >
          Save
        </Button>
      </Modal>
    </>
  )
}

export function KeypairUiTable() {
  const { keypairs, generateKeypair, setKeypair, deleteKeypair } = useKeypair()

  return keypairs.length ? (
    <Table>
      <Table.Thead>
        <Table.Tr>
          <Table.Th>Name / Network / Endpoint</Table.Th>
          <Table.Th align="center">Actions</Table.Th>
        </Table.Tr>
      </Table.Thead>
      <Table.Tbody>
        {keypairs?.map((item) => (
          <Table.Tr key={item.name}>
            <Table.Td>
              <Text size="lg">
                {item?.active ? (
                  item.name
                ) : (
                  <Anchor component="button" title="Select keypair" onClick={() => setKeypair(item)}>
                    {item.name}
                  </Anchor>
                )}
              </Text>
              <Text c="dimmed" size="xs">
                {item.publicKey}
              </Text>
            </Table.Td>
            <Table.Td>
              <Group gap="xs">
                <ActionIcon disabled={!item.solana} size="sm" variant="light">
                  <IconCurrencySolana />
                </ActionIcon>
                <UiDebugModal data={item} />
                <ActionIcon
                  size="sm"
                  variant="light"
                  disabled={item.active}
                  onClick={() => {
                    if (!window.confirm('Are you sure?')) return
                    deleteKeypair(item)
                  }}
                >
                  <IconTrash size={16} />
                </ActionIcon>
              </Group>
            </Table.Td>
          </Table.Tr>
        ))}
      </Table.Tbody>
    </Table>
  ) : (
    <UiAlert title="No keypairs found" message={<Button onClick={() => generateKeypair()}>Generate Keypair</Button>} />
  )
}
