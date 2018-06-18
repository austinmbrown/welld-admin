<template>
  <div>
    <h2>Companies</h2>
    <router-view></router-view>
  </div>
</template>

<script>
  import {mapActions} from 'vuex'
  export default {
    methods: {
      ...mapActions({
        fetchCompanies: 'fetchCompanies'
      })
    },
    created() {
      this.fetchCompanies()
    }
  }
</script>

<style scoped>
  button {
    margin: 0 auto 20px auto;
    display: block;
  }
  .router-link-exact-active {
    display: none;
  }
</style>
