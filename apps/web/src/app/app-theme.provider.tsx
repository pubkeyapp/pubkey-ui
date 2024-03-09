import { createContext, ReactNode, useContext } from 'react'
import {
  BACKGROUND_COLORS,
  BackgroundColors,
  defaultThemes,
  mantineColorIds,
  themeWithBrand,
  UiTheme,
  UiThemeSelectProvider,
} from '@pubkey-ui/core'
import { ThemeLink } from './app-routes'
import { atomWithStorage } from 'jotai/utils'
import { atom, useAtomValue, useSetAtom } from 'jotai/index'
import { Button, Divider, MantineColor, Menu } from '@mantine/core'
import { Link } from 'react-router-dom'

export interface AppTheme extends UiTheme {
  active?: boolean
}

function createAppTheme(color: MantineColor, dark?: BackgroundColors) {
  const id = `${color}-${dark ?? 'default'}`
  // Make sure `color` and `dark` are valid values
  if (dark && !Object.keys(BACKGROUND_COLORS).includes(dark ?? 'default')) {
    throw new Error(`Invalid value for dark: ${dark}`)
  }
  if (!mantineColorIds.includes(color)) {
    console.log(`Invalid color: ${color}`)
    throw new Error(`Invalid value for color: ${color}`)
  }

  return {
    id,
    theme: themeWithBrand(color, {
      components: {
        Input: {
          styles: {
            root: {
              // backgroundColor: 'transparent',
            },
          },
        },
      },
      colors: { dark: dark ? BACKGROUND_COLORS[dark] : undefined },
    }),
  }
}

const appThemes: AppTheme[] = [
  ...defaultThemes,
  createAppTheme('blue'),
  createAppTheme('red'),
  createAppTheme('pink'),
  createAppTheme('grape'),
  createAppTheme('violet'),
  createAppTheme('indigo'),
  createAppTheme('cyan'),
  createAppTheme('green'),
  createAppTheme('lime'),
  createAppTheme('yellow'),
  createAppTheme('orange'),
  createAppTheme('teal'),
]

const initialThemes = appThemes
const initialTheme = appThemes[0]

const themeAtom = atomWithStorage<AppTheme>('pubkey-ui-app-theme', initialTheme, undefined, { getOnInit: true })
const themesAtom = atomWithStorage<AppTheme[]>('pubkey-ui-app-themes', initialThemes, undefined, { getOnInit: true })

const activeThemesAtom = atom<AppTheme[]>((get) => {
  const themes = get(themesAtom)
  const theme = get(themeAtom)
  return themes?.map((item) => ({
    ...item,
    active: item.id === theme.id,
  }))
})

const activeThemeAtom = atom<AppTheme>((get) => {
  const themes = get(activeThemesAtom)

  return themes?.find((item) => item.active) || themes[0]
})

export interface AppThemeProviderContext {
  theme: AppTheme
  themes: AppTheme[]
  addTheme: (color: MantineColor, dark?: BackgroundColors) => void
  setTheme: (theme: AppTheme) => void
  resetThemes: () => Promise<void>
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
      const theme = createAppTheme(color, dark)
      // Make sure we don't add a theme with the same id
      if (themes.find((item) => item.id === theme.id)) {
        return
      }

      setThemes((prev) => [...prev, theme])
      setTheme(theme)
    },
    resetThemes: async () => {
      setTheme({ ...initialTheme })
      setThemes(() => [...initialThemes])
    },
    setTheme,
  }

  return (
    <Context.Provider value={value}>
      <UiThemeSelectProvider link={ThemeLink} theme={value.theme ?? undefined} themes={value.themes ?? []}>
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
        <Divider />
        <Menu.Item component={Link} to="/themes">
          App Themes
        </Menu.Item>
      </Menu.Dropdown>
    </Menu>
  )
}
