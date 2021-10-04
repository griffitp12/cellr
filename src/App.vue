<template>
  <Header class="header-container"/>
  <MainView v-if="authState.isUserLoggedIn" />
  <div v-else>
    <Login />
  </div>
</template>

<script lang="ts">
import { defineComponent} from 'vue';
import MainView from './views/MainView.vue';
import Login from './views/Login.vue'
import Header from './components/Header.vue'
import { AccessAuthStore } from './global/authStore'

export default defineComponent({
  name: 'App',
  components: {
    MainView, Login, Header
  },
  setup() {
    const authState = AccessAuthStore()

    return { authState };
  },
});
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
  margin: 0 auto
}

.header-container {
  height: 10vh;
}
</style>
