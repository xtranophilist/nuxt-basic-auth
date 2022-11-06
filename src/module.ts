import { fileURLToPath } from 'url'
import { defineNuxtModule, addPlugin } from '@nuxt/kit'
import { normalize } from 'pathe'

export interface ModuleOptions {
  addPlugin: boolean
}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: 'basic-auth',
    configKey: 'basicAuth'
  },
  defaults: {
    addPlugin: true
  },
  setup (moduleOptions, nuxt) {
    nuxt.hook('nitro:config', (config) => {
      config.plugins = config.plugins || []
      config.plugins.push(normalize(fileURLToPath(new URL('./runtime/nitro', import.meta.url))))
    })
  }
})
