import type { NitroAppPlugin, RenderResponse } from 'nitropack'
import { requireModule } from '@nuxt/kit'
const auth = requireModule('basic-auth')

export default <NitroAppPlugin> function (nitro) {
  nitro.hooks.hook('render:response', (response: RenderResponse, { event }) => {
    const credentials = auth(event.req)
    if (!credentials || credentials.name !== 'user' || credentials.pass !== 'pass') {
      response.statusCode = 401
      response.headers = response.headers || {}
      response.headers['WWW-Authenticate'] = 'Basic realm="example"'
      response.body = 'Access Denied!'
    }
  })
}
