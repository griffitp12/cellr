<template>
  <MainView v-if="currentUser.isLoggedIn" />
  <div v-else>
    <Login />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import MainView from './views/MainView.vue';
import Login from './views/Login.vue'
import { AccessAuth } from './global/authStore';

export default defineComponent({
  name: 'App',
  components: {
    MainView, Login
  },
  setup() {
    let { currentUser } = AccessAuth();

    return { currentUser };
  },
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
