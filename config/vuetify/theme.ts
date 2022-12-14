import { ThemeDefinition } from 'vuetify'

const dark: ThemeDefinition = {
  dark: true,
  colors: {
    primary: '#7d2fc6',
    secondary: '#1E88E5',
    tertiary: '#b8b8b8'
  }
}

const light: ThemeDefinition = {
  dark: false,
  colors: {
    primary: '#1E88E5',
    secondary: '#3fa5ff',
    tertiary: '#3881ff'
  }
}

export default {
  defaultTheme: 'dark',

  themes: {
    dark,
    light
  }
}
