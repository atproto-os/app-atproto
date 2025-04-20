import {defineNuxtModule, createResolver, addComponentsDir, addPlugin} from '@nuxt/kit'
import {registerTailwindPath} from "@owdproject/core/runtime/utils/utilsApp";

export default defineNuxtModule({
    meta: {
        name: 'owd-app-atproto',
    },
    async setup(options, nuxt) {
        const {resolve} = createResolver(import.meta.url);

        {

            // add components

            addComponentsDir({
                path: resolve("./runtime/components"),
            })

        }

        {

            // add plugins

            addPlugin(resolve('./runtime/plugin'))

        }

        {

            // configure tailwind

            registerTailwindPath(nuxt, resolve('./runtime/components/**/*.{vue,mjs,ts}'))

        }

        {

            // import i18n

            nuxt.hook('i18n:registerModule', register => {
                register({
                    // langDir path needs to be resolved
                    langDir: resolve('./i18n'),
                    locales: [
                        {
                            code: 'en',
                            file: 'locales/en.ts',
                        },
                    ]
                })
            })

        }

    }
})