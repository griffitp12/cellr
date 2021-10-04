<template>
  <div class="mainview-container">
    <WineList />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { AccessAuthStore } from '../global/authStore'
import WineList from './WineList.vue'

export default defineComponent({
  components: { WineList },
  name: 'MainView',

  setup() {
    let authState = AccessAuthStore()

    return { authState }
  },
})
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.mainview-container {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
</style>
