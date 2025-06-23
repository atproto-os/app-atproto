<script setup lang="ts">
import {
  routeAtprotoOS,
  routeBlueskyProfile,
} from '@owdproject/module-atproto/runtime/utils/utilRoute'
import { useRuntimeConfig } from 'nuxt/app'

const runtimeConfig = useRuntimeConfig()
</script>

<template>
  <div class="owd-atproto-desktop-owner text-center">
    <a :href="routeAtprotoOS('/client')" target="_blank" class="text-2xl">
      <span
        class="font-light"
        v-text="runtimeConfig.public.desktop.atprotoDesktop.name.title"
      />
      <span
        class="font-bold"
        v-text="runtimeConfig.public.desktop.atprotoDesktop.name.affix"
      />
    </a>
    <div
      class="-mt-1 mb-3 opacity-30"
      v-text="$t('atproto.desktop.instanceBy')"
    />
    <div>
      <div class="inline-flex">
        <div class="flex items-center pr-2">
          <a
            :href="
              routeBlueskyProfile(
                runtimeConfig.public.desktop.atprotoDesktop.owner.profile?.handle,
              )
            "
            target="_blank"
          >
            <Avatar
              shape="circle"
              :image="runtimeConfig.public.desktop.atprotoDesktop.owner.profile?.avatar"
            />
          </a>
        </div>
        <div
          class="flex items-center"
          v-text="runtimeConfig.public.desktop.atprotoDesktop.owner.profile.displayName"
        />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.owd-atproto {
  &-desktop-owner {
    a {
      display: inline-flex;
    }

    .p-avatar {
      width: 22px;
      height: 22px;
    }
  }
}
</style>
