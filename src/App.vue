<template>
  <div id="app">
    <h1>Welld Admin</h1>
    <div v-if="isLoggedIn">
      <router-link to="/admin_dashboard">Dashboard</router-link>
      <router-link to="/companies">Companies</router-link>
      <router-link to="/fitness_clubs">Fitness Clubs</router-link>
      <button @click="logout">Logout</button>
    </div>
    <transition name="component-fade" mode="out-in">
      <router-view></router-view>
    </transition>
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
  .router-link-exact-active {
    font-weight: bold;
  }
  .component-fade-enter-active, .component-fade-leave-active {
    transition: opacity .3s ease;
  }
  .component-fade-enter, .component-fade-leave-to
  /* .component-fade-leave-active below version 2.1.8 */ {
    opacity: 0;
  }
</style>
