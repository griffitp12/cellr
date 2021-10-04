<template>
  <div class="mainview-container">
    <WineList />
  </div>
</template>

<script setup lang="ts">
import WineList from './WineList.vue'

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
