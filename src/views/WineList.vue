<template>
  <h1>{{ authState.currentUser.username }}'s wine list</h1>
  <table>
    <tr>
      <th>Wine Name</th>
      <th>Varietal</th>
      <th>Color (Red, White, etc)</th>
    </tr>
    <tr v-for="wine in wineState.allWinesList" :key="wine.name" >
      <td> {{wine.name}}</td>
      <td> {{wine.varietal}}</td>
      <td> {{wine.color}}</td>
    </tr>
  </table>
</template>

<script setup lang="ts">
import { AccessWineStore } from '@/global/store/wineStore';
import { AccessAuthStore } from '../global/store/authStore'

let authState = AccessAuthStore()
let wineState = AccessWineStore()

</script>

<style scoped></style>
