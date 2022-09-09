import { ThemeDefinition } from 'vuetify'

const dark: ThemeDefinition = {
  dark: true,
  colors: {
    primary: '#7d2fc6'
  }
}

const light: ThemeDefinition = {
  dark: false,
  colors: {
    primary: '#1E88E5',
    secondary: '#3fa5ff'
  }
}

export default {
  defaultTheme: 'dark',

  themes: {
    dark,
    light
  }
}
