<script setup lang="ts">
import {routeAtprotoOS, routeBlueskyProfile} from "@owdproject/module-atproto/runtime/utils/utilsRoute";
import {useAppConfig} from "nuxt/app"

const appConfig = useAppConfig()
</script>

<template>
  <div class="owd-atproto-desktop-owner text-center">
    <a :href="routeAtprotoOS('/client')" target="_blank" class="text-2xl">
      <span class="font-light" v-text="appConfig.atproto.owd.desktop.name"/>
      <span class="font-bold" v-text="appConfig.atproto.owd.desktop.os"/>
    </a>
    <div
        class="-mt-1 mb-3 opacity-30"
        v-text="$t('atproto.desktop.instanceBy')"
    />
    <div>
      <div class="inline-flex">
        <div class="flex items-center pr-2">
          <a
              :href="routeBlueskyProfile(appConfig.atproto.owd.owner.profile?.handle)"
              target="_blank"
          >
            <Avatar
                shape="circle"
                :image="appConfig.atproto.owd.owner.profile?.avatar"
            />
          </a>
        </div>
        <div
            class="flex items-center"
            v-text="appConfig.atproto.owd.owner.profile.displayName"
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