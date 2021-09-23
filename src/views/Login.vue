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
import { AccessAuth } from '../global/authStore';
import { simpleLoginCheck } from '../utility/authFunctions';
import { UserData } from '../typescript/authTypes'

export default defineComponent({
  setup() {
    let { userList, currentUser } = AccessAuth();
    let enteredUsername = ref('');
    let enteredPassword = ref('');

    const loginHandler = (e: Event) => {
      e.preventDefault();
      console.log('checking login');
      let check = simpleLoginCheck(
        enteredUsername.value,
        enteredPassword.value,
        userList
      );
      if (check === false) {
          alert("invalid username or password")
      } else {
          (currentUser as UserData).username = check.username
      }
    };
    return { loginHandler, enteredUsername, enteredPassword };
  },
});
</script>
