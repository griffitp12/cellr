<template>
    <h1>"Hi {{user.username}}"</h1>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { AccessAuth } from '../global/authStore'

export default defineComponent({
  name: 'MainView',

  setup () {
    let { currentUser } = AccessAuth()
    console.log("MainView", currentUser)
    return { currentUser }
  }
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
