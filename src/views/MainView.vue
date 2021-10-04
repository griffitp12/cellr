<template>
    <h1>"Hi {{authState.currentUser.username}}"</h1>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { AccessAuthStore } from '../global/authStore'

export default defineComponent({
  name: 'MainView',

  setup () {
    let authState  = AccessAuthStore()
    
    return { authState }
  }
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
