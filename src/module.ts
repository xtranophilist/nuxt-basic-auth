import { fileURLToPath } from 'url'
import { defineNuxtModule, addPlugin } from '@nuxt/kit'
import { normalize } from 'pathe'

export interface ModuleOptions {
  username?: String
  password?: String
  enabled?: boolean
}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: 'basic-auth',
    configKey: 'basicAuth'
  },
  defaults: {
    enabled: true
  },
  setup (moduleOptions, nuxt) {
    nuxt.hook('nitro:config', (config) => {
      config.plugins = config.plugins || []
      config.plugins.push(normalize(fileURLToPath(new URL('./runtime/nitro', import.meta.url))))
      config.virtual = config.virtual || {}
      config.virtual['#basic-auth-config'] = `export default ${JSON.stringify(moduleOptions)}`
    })
  }
})
