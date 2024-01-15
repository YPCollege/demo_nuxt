<template>
  <div>
    <p>Some default layout content shared across all pages</p>
    <div>
      <p>Nav</p>
      <p><router-link to="/">Go to Home</router-link></p>
      <p><router-link to="/hello">Go to Hello</router-link></p>
      <p><router-link to="/uinfo/uinfo0">Go to Uinfo</router-link></p>
    </div>
    <slot />
  </div>
</template>