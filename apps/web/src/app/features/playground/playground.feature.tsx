import { Box, Flex } from '@mantine/core'

export function PlaygroundFeature() {
  return (
    <Flex direction="column" h="100%" justify="space-between" style={{ border: '1px solid red', height: '100%' }}>
      <Box component="header" p="md">
        Header
      </Box>
      <Box component="main" style={{ flexGrow: 1, border: '1px solid red' }}>
        Main
      </Box>
      <Box component="footer" p="md">
        Footer
      </Box>
    </Flex>
  )
}
