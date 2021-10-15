<template>
  <div class="wine-modal">
    <div class="overlay"></div>
    <div class="modal_content">
      <h2>Here are the details for {{ wineState.currentWine.name }}</h2>
      <p>Here are some details with some bells and whistles later</p>
      <button title="Close" class="close_modal" @click="$emit('closeModal')">X</button>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { AccessWineStore } from '../global/store/wineStore'

  const wineState = AccessWineStore()
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
</style>
