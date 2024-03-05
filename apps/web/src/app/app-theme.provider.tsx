import { createContext, ReactNode, useContext } from 'react'
import {
  BACKGROUND_COLORS,
  BackgroundColors,
  defaultThemes,
  themeWithBrand,
  UiTheme,
  UiThemeSelectProvider,
} from '@pubkey-ui/core'
import { ThemeLink } from './app-routes'
import { atomWithStorage } from 'jotai/utils'
import { atom, useAtomValue, useSetAtom } from 'jotai/index'
import { Button, MantineColor, Menu } from '@mantine/core'

export interface AppTheme extends UiTheme {
  active?: boolean
}

const appThemes: AppTheme[] = [
  ...defaultThemes,
  { id: 'gray-pink', theme: themeWithBrand('pink', { colors: { dark: BACKGROUND_COLORS['gray'] } }) },
  { id: 'zinc-pink', theme: themeWithBrand('pink', { colors: { dark: BACKGROUND_COLORS['zinc'] } }) },
  { id: 'neutral-pink', theme: themeWithBrand('pink', { colors: { dark: BACKGROUND_COLORS['neutral'] } }) },
  { id: 'slate-pink', theme: themeWithBrand('pink', { colors: { dark: BACKGROUND_COLORS['slate'] } }) },
  { id: 'stone-pink', theme: themeWithBrand('pink', { colors: { dark: BACKGROUND_COLORS['stone'] } }) },
  { id: 'gray-blue', theme: themeWithBrand('blue', { colors: { dark: BACKGROUND_COLORS['gray'] } }) },
  { id: 'zinc-blue', theme: themeWithBrand('blue', { colors: { dark: BACKGROUND_COLORS['zinc'] } }) },
  { id: 'neutral-blue', theme: themeWithBrand('blue', { colors: { dark: BACKGROUND_COLORS['neutral'] } }) },
  { id: 'slate-blue', theme: themeWithBrand('blue', { colors: { dark: BACKGROUND_COLORS['slate'] } }) },
  { id: 'stone-blue', theme: themeWithBrand('blue', { colors: { dark: BACKGROUND_COLORS['stone'] } }) },
]

const initialThemes = appThemes
const initialTheme = appThemes[0]

const themeAtom = atomWithStorage<AppTheme>('pubkey-ui-app-theme', initialTheme, undefined, { getOnInit: true })
const themesAtom = atomWithStorage<AppTheme[]>('pubkey-ui-app-themes', initialThemes, undefined, { getOnInit: true })

const activeThemesAtom = atom<AppTheme[]>((get) => {
  const themes = get(themesAtom)
  const theme = get(themeAtom)
  return themes.map((item) => ({
    ...item,
    active: item.id === theme.id,
  }))
})

const activeThemeAtom = atom<AppTheme>((get) => {
  const themes = get(activeThemesAtom)

  return themes.find((item) => item.active) || themes[0]
})

export interface AppThemeProviderContext {
  theme: AppTheme
  themes: AppTheme[]
  addTheme: (color: MantineColor, dark?: BackgroundColors) => void
  setTheme: (theme: AppTheme) => void
  resetThemes: () => void
}

const Context = createContext<AppThemeProviderContext>({} as AppThemeProviderContext)

export function AppThemeProvider({ children }: { children: ReactNode }) {
  const theme = useAtomValue(activeThemeAtom)
  const themes = useAtomValue(activeThemesAtom)
  const setTheme = useSetAtom(themeAtom)
  const setThemes = useSetAtom(themesAtom)

  const value: AppThemeProviderContext = {
    theme,
    themes,
    addTheme: (color: MantineColor, dark?: BackgroundColors) => {
      const id = `${color}-${dark ?? 'default'}`
      // Make sure we don't add a theme with the same id
      if (themes.find((item) => item.id === id)) {
        return
      }
      const theme: AppTheme = {
        id,
        theme: themeWithBrand(color, { colors: { dark: dark ? BACKGROUND_COLORS[dark] : undefined } }),
      }
      setThemes((prev) => [...prev, theme])
      setTheme(theme)
    },
    resetThemes: () => {
      setThemes(initialThemes)
    },
    setTheme,
  }

  return (
    <Context.Provider value={value}>
      <UiThemeSelectProvider link={ThemeLink} theme={value.theme} themes={value.themes}>
        {children}
      </UiThemeSelectProvider>
    </Context.Provider>
  )
}

export function useAppTheme() {
  return useContext(Context)
}

export function AppThemeSelect() {
  const { themes, theme, setTheme } = useAppTheme()
  return (
    <Menu shadow="md" width={200}>
      <Menu.Target>
        <Button>{theme.id}</Button>
      </Menu.Target>

      <Menu.Dropdown>
        {themes.map((item) => (
          <Menu.Item key={item.id} onClick={() => setTheme(item)}>
            {item.id}
          </Menu.Item>
        ))}
      </Menu.Dropdown>
    </Menu>
  )
}
