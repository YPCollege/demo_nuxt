<template>
  <div class="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-4 bg-white shadow-md">
    <form @submit.prevent="login" class="space-y-4">
      <input v-model="username" placeholder="Username" required class="w-full p-2 border border-gray-300">
      <input v-model="password" type="password" placeholder="Password" required class="w-full p-2 border border-gray-300">
      <button @click="login" class="w-full p-2 bg-green-500 text-white">登录</button>
    </form>
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  setup(_, { emit }) {
    const username = ref('');
    const password = ref('');

    const login = () => {
      emit('login-success', username.value, password.value);
    };

    return {
      username,
      password,
      login,
    };
  },
};
</script>

<style>
</style>
