import { SimpleGrid } from '@mantine/core'
import { getEnumOptions, UiCard, UiDebug, UiMultiSelectEnum, UiSelectEnum, UiStack } from '@pubkey-ui/core'
import { useState } from 'react'

enum DemoEnum {
  One = 'One',
  Two = 'Two',
  Three = 'Three',
}
export function DemoFeatureSelectEnum() {
  const [value, setValue] = useState<DemoEnum | undefined>(undefined)
  const [values, setValues] = useState<DemoEnum[] | undefined>(undefined)
  return (
    <UiCard title="SelectEnum">
      <UiStack>
        <SimpleGrid cols={2}>
          <UiSelectEnum<DemoEnum> value={value} setValue={setValue} options={getEnumOptions(DemoEnum)} />
          <UiDebug data={{ value }} open />
          <UiMultiSelectEnum<DemoEnum> values={values} setValues={setValues} options={getEnumOptions(DemoEnum)} />
          <UiDebug data={{ values }} open />
        </SimpleGrid>
      </UiStack>
    </UiCard>
  )
}
