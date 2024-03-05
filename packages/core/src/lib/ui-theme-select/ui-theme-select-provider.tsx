import { Button, createTheme, MantineColor, MantineThemeOverride, Menu } from '@mantine/core'
import { UiThemeProvider, UiThemeProviderOptions } from '../ui-theme'
import { createContext, useContext, useMemo, useState } from 'react'
import { MANTINE_COLORS } from './ui-theme-select-colors'

export type UiTheme = { id: string; theme: MantineThemeOverride }

export function themeWithBrand(color: MantineColor, override: MantineThemeOverride = {}): MantineThemeOverride {
  return {
    ...override,
    colors: {
      ...override.colors,
      brand: MANTINE_COLORS[color],
    },
    primaryColor: 'brand',
  }
}

export const defaultThemes: UiTheme[] = [{ id: 'brand', theme: themeWithBrand('blue') }]

export interface UiThemeSelectProviderContext {
  themes: UiTheme[]
  selected: UiTheme
  compiled: MantineThemeOverride
  selectTheme: (themeId: string) => void
}

const Context = createContext<UiThemeSelectProviderContext>({} as UiThemeSelectProviderContext)

export function UiThemeSelectProvider({ children, ...props }: UiThemeProviderOptions & { themes?: UiTheme[] }) {
  const themes = useMemo(() => props.themes ?? defaultThemes, [props.themes])

  const [selectedId, setSelectedId] = useState(themes[0].id)

  const selected = useMemo(() => themes.find((t) => t.id === selectedId) ?? themes[0], [themes, selectedId])
  const compiled = useMemo(() => createTheme(selected.theme), [selected.theme])

  const value: UiThemeSelectProviderContext = {
    themes,
    selected: selected,
    compiled,
    selectTheme: (themeId: string) => {
      if (themes.find((t) => t.id === themeId)) {
        setSelectedId(themeId)
        return
      }
      console.warn(`Theme ${themeId} not found`)
    },
  }

  return (
    <Context.Provider value={value}>
      <NestUiTheme {...props}>{children}</NestUiTheme>
    </Context.Provider>
  )
}

export function useUiThemeSelect() {
  return useContext(Context)
}

export function UiThemeSelect() {
  const { themes, selected, selectTheme } = useUiThemeSelect()
  return (
    <Menu shadow="md" width={200}>
      <Menu.Target>
        <Button>{selected.id}</Button>
      </Menu.Target>

      <Menu.Dropdown>
        {themes.map((item) => (
          <Menu.Item key={item.id} onClick={() => selectTheme(item.id)}>
            {item.id}
          </Menu.Item>
        ))}
      </Menu.Dropdown>
    </Menu>
  )
}

function NestUiTheme({ children, ...props }: UiThemeProviderOptions) {
  const { compiled } = useUiThemeSelect()
  return (
    <UiThemeProvider theme={compiled} {...props}>
      {children}
    </UiThemeProvider>
  )
}
