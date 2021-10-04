<template>
  <form action="">
    <label for="username">Username</label>
    <input
      type="text"
      name="username"
      id="username"
      v-model="enteredUsername"
    />

    <label for="password">Password</label>
    <input
      type="password"
      name="password"
      id="password"
      v-model="enteredPassword"
    />

    <button @click="loginHandler">Login</button>
  </form>
</template>

<script lang="ts">
import { defineComponent, ref, Ref } from 'vue';
import { AccessAuthStore } from '../global/authStore';
import { simpleLoginCheck } from '../utility/authFunctions';

export default defineComponent({
  setup(_, {emit}) {
    let authState  = AccessAuthStore();
    let enteredUsername: Ref<string> = ref('');
    let enteredPassword: Ref<string> = ref('');

    const loginHandler = (e: Event) => {
      e.preventDefault();
      console.log('checking login');
      let check = simpleLoginCheck(
        enteredUsername.value,
        enteredPassword.value,
        authState.userList
      );
      if (check === false) {
          alert("invalid username or password")
      } else {
          console.log("redirecting")
          authState.currentUser = check
          authState.isUserLoggedIn = true
      }
    };
    return { loginHandler, enteredUsername, enteredPassword };
  },
});
</script>
