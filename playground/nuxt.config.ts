import { defineNuxtConfig } from 'nuxt/config'
import BasicAuth from '..'

export default defineNuxtConfig({
  modules: [
    BasicAuth
  ],
  basicAuth: {
  }
})
