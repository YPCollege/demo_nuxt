<script setup lang="ts">
const appConfig = useAppConfig().installed_apps['uinfo']
console.log(appConfig)
</script>
<template>
  <div>
    <p>{{ appConfig.app_name }}</p>
    <p><router-link to="/uinfo/uinfo0">Go to uinfo0</router-link></p>
    <p><router-link to="/uinfo/uinfo1">Go to uinfo1</router-link></p>
    <NuxtPage />
  </div>
</template>
