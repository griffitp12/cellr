<template>
  <div class="wine-modal">
    <div class="overlay"></div>
    <div class="modal_content">
      <h2>Here are the details for {{ wineState.currentWine.name }}</h2>
      <div v-if="isLoading">
        <p>One moment, please...</p>
      </div>
      <div v-else>
        <table class="encounters-table">
          <tr class="encounters-row">
            <th>Price</th>
            <th>Purchase Location</th>
            <th>Rating</th>
            <th>Notes</th>
            <th>Date</th>
          </tr>
          <tr class="encounters-row" v-for="encounter in encounterList" :key="encounter.id">
            <td>{{ encounter.bottle_price }}</td>
            <td>{{ encounter.purchase_location }}</td>
            <td>{{ encounter.rating }}</td>
            <td>{{ encounter.notes }}</td>
            <td>{{ encounter.encounter_date }}</td>
          </tr>
        </table>
      </div>

      <button title="Close" class="close_modal" @click="$emit('closeModal')">X</button>
      <button title="Delete" class="delete_button" @click="deleteWine">Delete Wine</button>
    </div>
  </div>
</template>

<script lang="ts">
  import { ref, Ref, defineComponent } from 'vue'
  import { AccessWineStore } from '../global/store/wineStore'
  import { WineEncounter } from '../../typescript/wineTypes'
  import { encounters, wines } from '@/global/apicalls'

  export default defineComponent({
    setup(_, context) {
      const wineState = AccessWineStore()
      const encounterList: Ref<WineEncounter[]> = ref([])
      const isLoading = ref(true)

      const setEncounters = async () => {
        if (wineState.currentWine.id) {
          encounterList.value = await encounters.getEncountersByWine(wineState.currentWine.id)
        } else {
          alert("wine doesn't exist")
        }
        isLoading.value = false
      }

      setEncounters()

      const deleteWine = async () => {
        if (wineState.currentWine.id) {
          await wines.deleteWine(wineState.currentWine.id)
        }
        context.emit('closeModal')
      }

      return { deleteWine, encounterList, wineState, isLoading }
    },
  })
</script>

<style>
  .wine-modal {
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: 990;
  }

  .wine-modal .overlay {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: 995;
    background: rgba(0, 0, 0, 0.85);
  }

  .wine-modal .modal_content {
    border: red 1px solid;
    z-index: 999;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    max-height: 90%;
    overflow: auto;
    background: #fff;
    box-sizing: border-box;
    padding: 20px;
    box-shadow: 0 1px 5px rgba(0, 0, 0, 0.7);
    border-radius: 4px;
    width: 520px; /* This just a default width */
  }

  .wine-modal .modal_content .buttons_wrapper {
    padding: 20px;
  }

  .wine-modal .close_modal {
    position: absolute;
    right: 10px;
    top: 10px;
    cursor: pointer;
    font-size: 18px;
    opacity: 0.5;
    background: none;
    border: none;
    transition: opacity 0.2s ease;
  }

  .wine-modal .close_modal:hover {
    opacity: 0.9;
  }

  .delete_button {
    background: red;
    cursor: pointer;
  }
</style>
