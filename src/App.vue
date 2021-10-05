<template>
  <Header class="header-container" />
  <div class=" app-container">
    <MainView v-if="authState.isUserLoggedIn" />
    <Login v-else />
  </div>
</template>

<script setup lang="ts">
import MainView from './views/MainView.vue'
import Login from './views/Login.vue'
import Header from './components/Header.vue'
import { AccessAuthStore } from './global/authStore' 
import { getAllUsers } from './global/utility/authFunctions'


const authState = AccessAuthStore()
const users = await getAllUsers()
console.log(users)
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
