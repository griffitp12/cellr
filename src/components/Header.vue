<template>
  <div >
    <div v-if="authState.isUserLoggedIn" class="header">
      <p class="header-text">Welcome, {{ authState.currentUser.username }}!</p>
      <router-link to="/addWine"><button>Add a Wine</button></router-link>
      <router-link to="/"><button>See your Cellr</button></router-link>
    </div>
    <div v-else class="header">
      <p class="header-text">Welcome to cellr, please login!</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { AccessAuthStore } from '../global/store/authStore'
import { colors } from '../global/constants/constants'

const authState = AccessAuthStore()
const primary = colors.primary
</script>

<style scoped>
.header {
  background: v-bind(primary);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
}
.header-text {
  color: white;
  font-size: 1.5em;
}
</style>
