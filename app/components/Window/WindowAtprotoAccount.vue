<script setup lang="ts">
import {atprotoSignIn, atprotoSignOut} from "~owd-atproto/utils/utilsAtproto";
import {useAtprotoAccountStore} from "~owd-atproto/stores/storeAtprotoAccount";

const props = defineProps<{
  window: IWindowController
}>()

const atprotoAccountStore = useAtprotoAccountStore()
const {t} = useI18n()

onBeforeMount(() => {
  if (atprotoAccountStore.isAccountLogged) {
    props.window.actions.setTitleOverride(atprotoAccountStore.account.handle)
  }
})

watch(() => atprotoAccountStore.account, (account) => {
  if (atprotoAccountStore.isAccountLogged) {
    props.window.actions.setTitleOverride(account.handle)
  } else {
    props.window.actions.resetTitleOverride()
  }
})

function onServiceResolverChange() {
  if (atprotoAccountStore.isAccountLogged) {
    // already logged, can't change resolver now
    return
  }

  const customServiceResolver = window.prompt(
      t('atproto.login.resolver.prompt'),
      atprotoAccountStore.handleResolver
  )

  if (customServiceResolver) {
    atprotoAccountStore.handleResolver = customServiceResolver
  }
}
</script>

<template>
  <Window v-bind="$props" :content="{padded: true, centered: true}">
    <div class="flex flex-col h-full">

      <AtprotoDesktopOwner />

      <div class="owd-atproto-login flex-1 text-center">

        <div>
          <div>
            <Avatar
                :label="!atprotoAccountStore.isAccountLogged ? '?' : atprotoAccountStore.account.handle.charAt(0)"
                :image="atprotoAccountStore.account ? atprotoAccountStore.account.avatar : undefined"
                size="xlarge" shape="circle"
            >
              <Skeleton
                  v-if="atprotoAccountStore.state.fetching"
                  width="100%" height="100%" borderRadius="50%"
              />
            </Avatar>
          </div>

          <Button
              v-if="!atprotoAccountStore.isAccountLogged && !atprotoAccountStore.state.fetching"
              size="large" @click="atprotoSignIn()"
              v-text="$t('atproto.login.actions.login')"
          />

          <Button
              v-if="atprotoAccountStore.isAccountLogged"
              size="large" @click="atprotoSignOut()"
              v-text="$t('atproto.login.actions.logout')"
          />
        </div>

      </div>

      <div class="text-center opacity-35">
        {{$t('atproto.login.resolver.using')}} <span
          :class="{'cursor-pointer': !atprotoAccountStore.isAccountLogged}"
          v-text="atprotoAccountStore.handleResolverHostname"
          @click="onServiceResolverChange()"
      />
      </div>

    </div>
  </Window>
</template>

<style scoped lang="scss">
.owd-atproto {
  &-login {
    align-content: center;

    .p-avatar {
      width: 120px;
      height: 120px;
      margin: 0 0 32px 0;
      text-transform: uppercase;
      font-size: 32px;
    }
  }
}
</style>
