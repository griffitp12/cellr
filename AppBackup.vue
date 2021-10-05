<template>
  <Header class="header-container" />
  <div class=" app-container">
    <div v-if="!authState.isUserLoggedIn">
      <Login />
    </div>
    <div v-else>
      <MainView />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, defineAsyncComponent } from 'vue'
import { AccessAuthStore } from './global/store/authStore'
import { AccessWineStore } from './global/store/wineStore'
import { setAllUsers, setAllWines } from './global/store/setters'

export default defineComponent({
  components: {
    MainView: defineAsyncComponent(() => import('./views/MainView.vue')),
    Login: defineAsyncComponent(() => import('./views/Login.vue')),
    Header: defineAsyncComponent(() => import('./components/Header.vue')),
  },

  setup() {
    const authState = AccessAuthStore()
    const wineState = AccessWineStore()

    const setStores = async () => {
      await setAllUsers()
      await setAllWines()
    }

    setStores()

    return { authState, wineState }
  },
})
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
body {
  width: 100vw;
  margin: 0 auto;
}
.header-container {
  height: 10vh;
}
.app-container {
  margin: 5px;
}
</style>
