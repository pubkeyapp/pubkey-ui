import {
  backgroundColorIds,
  BackgroundColors,
  mantineColorIds,
  UiCard,
  UiContainer,
  UiDebug,
  UiDebugModal,
  UiInfo,
  UiStack,
  useUiThemeSelect,
} from '@pubkey-ui/core'
import { useAppTheme } from '../../app-theme.provider'
import { Button, Grid, Group, MantineColor, Select, Text } from '@mantine/core'
import { useState } from 'react'
import { DemoFeatureTabRoutes } from '../demo/demo-feature-tab-routes'
import { DemoFeatureLoader } from '../demo/demo-feature-loader'
import { DemoFeatureAlerts } from '../demo/demo-feature-alerts'
import { DemoFeatureAnchor } from '../demo/demo-feature-anchor'
import { DemoFeatureBack } from '../demo/demo-feature-back'
import { DemoFeatureCopy } from '../demo/demo-feature-copy'
import { DemoFeatureForm } from '../demo/demo-feature-form'
import { DemoFeatureGridRoutes } from '../demo/demo-feature-grid-routes'
import { DemoFeatureHeader } from '../demo/demo-feature-header'
import { DemoFeatureMenu } from '../demo/demo-feature-menu'
import { DemoFeatureNotFound } from '../demo/demo-feature-not-found'
import { DemoFeaturePage } from '../demo/demo-feature-page'
import { DemoFeatureSearchInput } from '../demo/demo-feature-search-input'
export function ThemesFeature() {
  const { themes, addTheme, resetThemes, setTheme, theme } = useAppTheme()
  const { selected } = useUiThemeSelect()
  return (
    <UiContainer>
      <UiStack>
        <UiInfo
          variant="outline"
          message={
            <UiStack>
              <Text>These are some local themes that are stored in your browser.</Text>
              <Group justify="flex-end">
                <UiDebugModal data={{ selected: selected.id, theme: theme.id, themes }} />
                <Button size="xs" variant={'light'} onClick={resetThemes}>
                  Reset to Default
                </Button>
              </Group>
            </UiStack>
          }
        />
        <UiCard title="Add App Theme">
          <UiStack>
            <ThemeForm add={addTheme} />
          </UiStack>
        </UiCard>
        <UiCard title="ThemeSelect">
          <Group>
            {themes
              .sort((a, b) => a.id.localeCompare(b.id))
              .map((item) => (
                <Button disabled={theme.id === item.id} key={item.id} onClick={() => setTheme(item)}>
                  {item.id}
                </Button>
              ))}
          </Group>
        </UiCard>
        <AppThemeUiDemo />
        <UiDebug data={{ selected: selected.id, theme: theme.id, themes }} />
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
        data={mantineColorIds.sort((a, b) => a.localeCompare(b)).map((id) => ({ label: id, value: id }))}
        value={color}
        onChange={(value) => (value ? setColor(value as MantineColor) : undefined)}
      />

      <Select
        label="Dark"
        description="Select the dark color"
        clearable
        data={backgroundColorIds.sort((a, b) => a.localeCompare(b)).map((id) => ({ label: id, value: id }))}
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

export function AppThemeUiDemo() {
  return (
    <UiStack>
      <Grid>
        <Grid.Col span={12}>
          <DemoFeatureAlerts />
        </Grid.Col>
        <Grid.Col span={4}>
          <DemoFeatureAnchor />
        </Grid.Col>
        <Grid.Col span={4}>
          <DemoFeatureLoader />
        </Grid.Col>
        <Grid.Col span={4}>
          <DemoFeatureMenu />
        </Grid.Col>
        <Grid.Col span={4}>
          <DemoFeatureBack />
        </Grid.Col>
        <Grid.Col span={4}>
          <DemoFeatureCopy />
        </Grid.Col>
      </Grid>
      <DemoFeatureGridRoutes basePath="/themes" />
      <DemoFeatureTabRoutes basePath="/themes" />
      <DemoFeatureForm />
      <DemoFeatureHeader />
      <DemoFeaturePage />
      <DemoFeatureSearchInput />
      <DemoFeatureNotFound />
    </UiStack>
  )
}
