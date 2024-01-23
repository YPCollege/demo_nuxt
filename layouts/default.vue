<template>
  <div class="p-4">
    <p class="mb-4">Some default layout content shared across all pages (这是default layout中的内容, 包括下面的身份显示与登录按钮)</p>
    <div>
      <nav>
        <div v-if="!userLoggedIn" class="mb-4">
          <p>您当前身份为：游客</p>
          <button @click="showLoginModal" class="bg-blue-500 text-white p-2 rounded">点击登录</button>
        </div>
        <div v-else class="mb-4">
          <p>您好，{{ username }}</p>
          <button @click="logout" class="bg-red-500 text-white p-2 rounded">点击登出</button>
        </div>
      </nav>,
      <loginModal v-if="showModal" @login-success="handleLoginSuccess" />
    </div>
  </div>
</template>

<script>
import loginModal from '~/components/loginModal.vue';
import { ref } from 'vue';

export default {
  setup() {
    const userLoggedIn = ref(false);
    const showModal = ref(false);
    const username = ref('');
    const password = ref('');
    const userPasswordMatch = ref(false);


    const showLoginModal = () => {
      showModal.value = true;
    };

    const checkUserPassword = (enteredUsername, enteredPassword) => {
      // 在此实现检查（用户名，密码）是否正确的逻辑
      userPasswordMatch.value = true;
    }

    const handleLoginSuccess = (enteredUsername, enteredPassword) => {
      username.value = enteredUsername;
      password.value = enteredPassword;
      checkUserPassword(enteredUsername, enteredPassword);
      if (userPasswordMatch.value){
        showModal.value = false;
        userLoggedIn.value = true;
      }
    };

    const logout = () => {
      userLoggedIn.value = false;
      username.value = '';
      password.value = '';
    };

    return {
      userLoggedIn,
      showModal,
      username,
      showLoginModal,
      handleLoginSuccess,
      logout,
    };
  },
};
</script>

<style>
</style>
