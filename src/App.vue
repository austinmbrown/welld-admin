<template>
  <div id="app">
    <h1>Welld Admin</h1>
    <button v-if="isLoggedIn" @click="logout">Logout</button>
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'app',
    components: {},
    methods: {
      logout: function() {
        this.$store.dispatch("logout")
        .then(() => {
          this.$router.push("/")
        });
      }
    },
    computed: {
      isLoggedIn() {
        return this.$store.getters.isLoggedIn;
      }
    }
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
