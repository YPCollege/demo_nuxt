<template>
  <div>
    <p>Some default layout content shared across all pages (这是default layout中的内容，包括下面的身份显示与登录按钮)</p>
    <div>
      <nav>
      <div v-if="!userLoggedIn">
        <p>您当前身份为：游客</p>
        <button @click="showLoginModal">点击登录</button>
      </div>
      <div v-else>
          <p>您好，{{ username }}</p>
        <button @click="logout">点击登出</button>
      </div>
    </nav>

    <loginModal v-if="showModal" @login-success="handleLoginSuccess" />
    </div>
  </div>
</template>

<script>
import loginModal from '~/components/loginModal.vue';

export default {
  data() {
    return {
      userLoggedIn: false,
      showModal: false,
      username: '',
      password: '',
    };
  },
  methods: {
    showLoginModal() {
      this.showModal = true;
    },
    handleLoginSuccess(username) {
      this.showModal = false;
      this.userLoggedIn = true;
      this.username = username;
      this.password = password;
      // 加载数据、刷新页面
    },
    logout() {
      this.userLoggedIn = false;
      this.username = '';
    },
  },
};
</script>

<style>
</style>
