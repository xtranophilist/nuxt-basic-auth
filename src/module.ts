import { resolve } from 'path'
import { defineNuxtModule, createResolver } from '@nuxt/kit'

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
  async setup (moduleOptions, nuxt) {
    const resolver = createResolver(import.meta.url)
    const runtimeDir = await resolver.resolve('./runtime')
    nuxt.hook('nitro:config', (config) => {
      config.plugins = config.plugins || []
      config.plugins.push(resolve(runtimeDir, 'nitro'))
      config.virtual = config.virtual || {}
      config.virtual['#basic-auth-config'] = `export default ${JSON.stringify(moduleOptions)}`
    })
  }
})
