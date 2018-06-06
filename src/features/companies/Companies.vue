<template>
  <div>
    <h2>Companies</h2>

    <router-link to="/companies/new" tag="button">Add Company</router-link>
    <router-view></router-view>
  </div>
</template>

<style scoped>
  button {
    margin: 0 auto 20px auto;
    display: block;
  }
  .router-link-exact-active {
    display: none;
  }
</style>
