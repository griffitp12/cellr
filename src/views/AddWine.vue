<template>
  <div class="flex-container-col">
    <h1>Add a wine</h1>
    <form action="" autocomplete="off" class="addwine-form">
      <input type="text" name="wineName" v-model="wineName"/>
      <label for="wineName"> Wine Name</label>
      <br />
      <input type="text" name="varietal" v-model="varietal" />
      <label for="varietal"> Varietal</label>
      <br />
      <input type="text" name="color" v-model="color"/>
      <label for="color">Color</label>
      <br>
      <button @click="postWine" type="submit">Add Wine</button>
    </form>
  </div>
</template>

<script setup lang="ts">
  import { wines } from '../global/apicalls'
  import { Wine } from '../../typescript/wineTypes'
  import { ref } from 'vue'

  const wineName = ref('')
  const varietal = ref('')
  const color = ref('')


  const postWine = (e: Event) => {
    e.preventDefault()
    const newWine: Wine = {
      name: wineName.value,
      varietal: varietal.value,
      color: color.value
    }
    wines.postWine(newWine)
  }
</script>

<style>
  .addwine-form {
    display: flex;
    flex-direction: column;
    width: 20vw;
  }
</style>
