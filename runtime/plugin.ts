import { defineNuxtPlugin } from 'nuxt/app'
import { defineDesktopApp } from '@owdproject/core/kit/defineDesktopApp'
import configAppAtproto from './app.config'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.hook('app:created', async () => {
    await defineDesktopApp(configAppAtproto)
  })
})
