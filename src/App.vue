<template>
  <Header class="header-container" />
  <div class=" app-container flex-container-col">
    <div v-if="!authState.isUserLoggedIn">
      <Login />
    </div>
    <div v-else>
      <router-view></router-view>
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
    Login: defineAsyncComponent(() => import('./views/Login.vue')),
    Header: defineAsyncComponent(() => import('./components/Header.vue')),
  },

  setup() {
    const authState = AccessAuthStore()
    const wineState = AccessWineStore()

    const setStores = async () => { 
      console.log('setting all users')
      await setAllUsers()
      console.log('setting all wines')
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
  height: auto;
}
.app-container {
  margin: 5px;
}

.flex-container-col {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
</style>
