<template>
  <div class="header">
    <div v-if="authState.isUserLoggedIn" class="header-text">Welcome to your cellr, {{ authState.currentUser.username }}</div>
    <div v-else class="header-text">Welcome to cellr, please login!</div>
  </div>
</template>

<script setup lang="ts">
import { AccessAuthStore } from '../global/authStore'
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
}
.header-text {
  color: white;
  font-size: 1.5em;
}
</style>
