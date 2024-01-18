<template>
  <div class="modal">
    <form @submit.prevent="login">
      <input v-model="username" placeholder="Username" required>
      <input v-model="password" type="password" placeholder="Password" required>
      <button type="submit">登录</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: '',
      password: '',
    };
  },
  methods: {
    login() {
      this.$emit('login-success', this.username);
    },
  },
};
</script>

<style scoped>
.modal {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 20px;
  background-color: #fcfeff;
  box-shadow: 0 0 10px rgba(117, 238, 199, 0.3);
}
</style>
