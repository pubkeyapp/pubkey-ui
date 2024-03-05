import {
  backgroundColorIds,
  BackgroundColors,
  mantineColorIds,
  UiCard,
  UiContainer,
  UiDebug,
  UiInfo,
  UiStack,
  useUiThemeSelect,
} from '@pubkey-ui/core'
import { useAppTheme } from '../../app-theme.provider'
import { Button, Group, MantineColor, Select } from '@mantine/core'
import { useState } from 'react'
export function ThemesFeature() {
  const { themes, addTheme, setTheme, theme } = useAppTheme()
  const { selected } = useUiThemeSelect()
  return (
    <UiContainer>
      <UiStack>
        <UiCard title="Add App Theme">
          <UiStack>
            <UiInfo variant="outline" message="These are some local themes that are stored in your browser." />
            <ThemeForm add={addTheme} />
          </UiStack>
        </UiCard>
        <UiCard title="ThemeSelect">
          <Group>
            {themes.map((item) => (
              <Button disabled={theme.id === item.id} key={item.id} onClick={() => setTheme(item)}>
                {item.id}
              </Button>
            ))}
          </Group>
        </UiCard>
        <UiDebug data={{ selected: selected.id, theme: theme.id, themes }} open />
      </UiStack>
    </UiContainer>
  )
}

export function ThemeForm({ add }: { add: (color: MantineColor, dark?: BackgroundColors) => void }) {
  const [color, setColor] = useState<MantineColor>('blue')
  const [dark, setDark] = useState<BackgroundColors | undefined>(undefined)

  return (
    <Group align="end">
      <Select
        label="Color"
        description="Select the primary color"
        required
        data={mantineColorIds.map((id) => ({ label: id, value: id }))}
        value={color}
        onChange={(value) => (value ? setColor(value as MantineColor) : undefined)}
      />

      <Select
        label="Dark"
        description="Select the dark color"
        clearable
        data={backgroundColorIds.map((id) => ({ label: id, value: id }))}
        value={dark}
        onChange={(value) => (value ? setDark(value as BackgroundColors) : undefined)}
      />
      <Button
        onClick={() => {
          add(color, dark)
        }}
      >
        Add
      </Button>
    </Group>
  )
}
