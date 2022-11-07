# Basic auth module for Nuxt.js

## Installation

```bash
yarn add nuxt-basic-auth
```

## Usage

In your nuxt config:

```js
export default defineNuxtConfig({
  modules: ['nuxt-basic-auth'],
  basicAuth: {
     username: 'theUsername',
     password: 'thePassword',
     // enabled: true // true by default
  },
```

## Configuration

The configuration should be obvious from the usage. You can set username and password through basicAuth object key on nuxt configuration file (`nuxt.config.ts` or `nuxt.config.js`). The `enabled` configuration key can be set to `false` to disable basic authentication.

## TODO
- Add Nuxt 2 support
- Add tests
