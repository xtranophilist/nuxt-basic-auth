import type { NitroAppPlugin, RenderResponse } from 'nitropack'
import { requireModule } from '@nuxt/kit'
// @ts-expect-error import virtual module
import config from '#basic-auth-config'
const auth = requireModule('basic-auth')

export default <NitroAppPlugin> function (nitro) {
  nitro.hooks.hook('render:response', (response: RenderResponse, { event }) => {
    const credentials = auth(event.req)
    console.log(config)
    if (
      config.username && config.password && config.enabled &&
      (!credentials ||
        credentials.name !== config.username ||
        credentials.pass !== config.password)
    ) {
      response.statusCode = 401
      response.headers = response.headers || {}
      response.headers['WWW-Authenticate'] = 'Basic realm="example"'
      response.body = 'Access Denied!'
    }
  })
}
