<template>
  <h1>{{ authState.currentUser.username }}'s wine list</h1>
  <table class="wine-table">
    <tr class="wine-row">
      <th>Wine Name</th>
      <th>Varietal</th>
      <th>Vintage</th>
      <th>Color (Red, White, etc)</th>
    </tr>
    <tr class="wine-row" v-for="wine in wineState.allWinesList" :key="wine.name" :name="wine.name" @click="wineClickHandler(wine)">
      <td>{{ wine.name }}</td>
      <td>{{ wine.varietal }}</td>
      <td>{{ wine.vintage }}</td>
      <td>{{ wine.color }}</td>
    </tr>
  </table>

  <WineDetails v-if="showModal" @closeModal="showModal = false" />
</template>

<script setup lang="ts">
  import { ref } from '@vue/reactivity'
  import { AccessWineStore } from '../global/store/wineStore'
  import { AccessAuthStore } from '../global/store/authStore'
  import { setCurrentWine } from '../global/store/setters'
  import { Wine } from '../../typescript/wineTypes'
  import WineDetails from '../components/WineDetails.vue'

  const authState = AccessAuthStore()
  const wineState = AccessWineStore()
  const showModal = ref(false)

  const wineClickHandler = (clickedWine: Wine) => {
    setCurrentWine(clickedWine)
    showModal.value = true
  }
</script>

<style scoped>
  .wine-table {
    border-collapse: collapse;
    padding: 1px;
  }
  .wine-row {
    border: 1px solid black;
    cursor: pointer;
  }
</style>
