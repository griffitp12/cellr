<template>
  <div class="header">
    <div v-if="authState.isUserLoggedIn" class="header-text">Welcome to your cellr, {{ authState.currentUser.username }}</div>
    <div v-else class="header-text">Welcome to cellr, please login!</div>
  </div>
</template>

<script lang="ts">
import { AccessAuthStore } from '@/global/authStore'
import { defineComponent } from 'vue'

export default defineComponent({
  setup() {
    const authState = AccessAuthStore()

    return { authState }
  },
})
</script>

<style scoped>
.header {
  background: rebeccapurple;
  display: flex;
  align-items: center;
  justify-content: center;
}
.header-text {
    color: white;
    font-size: 1.5em;
}
</style>
