<template>
  <div class="header">
    <div v-if="authState.isUserLoggedIn">Welcome to your cellr, {{ authState.currentUser.username }}</div>
    <div v-else>Welcome to cellr, please login!</div>
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
  align-content: center;
  justify-content: center;
}
</style>
