<template>
  <h1>{{ authState.currentUser.username }}'s wine list</h1>
  <table>
    <tr>
      <th>Wine Name</th>
      <th>Varietal</th>
      <th>Price</th>
      <th>Rating</th>
      <th>Color (Red, White, etc)</th>
    </tr>
    <tr>
      <td>Example Name</td>
      <td>Camenbert</td>
      <td>7 Federation Credits</td>
      <td>11/10</td>
      <td>White</td>
    </tr>
  </table>
</template>

<script setup lang="ts">
import { AccessAuthStore } from '../global/store/authStore'

let authState = AccessAuthStore()

</script>

<style scoped></style>
