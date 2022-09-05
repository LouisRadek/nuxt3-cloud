import { createVuetify } from 'vuetify'
import vuetifyConfig from '~~/config/vuetify'

export default defineNuxtPlugin(nuxtApp => {
  const vuetify = createVuetify(vuetifyConfig)

  nuxtApp.vueApp.use(vuetify)
})
