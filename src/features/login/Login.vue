<template>
  <div>
    <h2>Login</h2>
    <img v-if="loginPending" class="loader" src="@/assets/loader.gif">
    <form v-else @submit.prevent='login'>
      <label for='username'>Username: </label>
      <input v-model='username' name='username'>

      <label for='password'>Password: </label>
      <input v-model='password' name='password' type='password'>

      <input type="submit" v-bind:disabled='formInvalid' value="Submit">
    </form>

    <p v-if="loginFailed && !loginPending">Login failed</p>

  </div>
</template>


<script>
  export default {
    data: function() {
      return {
        username: null,
        password: null,
        loginFailed: false
      }
    },
    computed: {
      formInvalid() {
        return !this.username || !this.password;
      },
      loginPending() {
        return this.$store.getters.loginPending
      }
    },
    methods: {
      login: function() {
        this.$store.dispatch("login", {
          user: {
            username: this.username,
            password: this.password
          }
        })
        .then(() => {
          if (this.$store.getters.isLoggedIn) {
            this.$router.push("admin_dashboard");
          } else {
            this.loginFailed = true;
          }
        });
      }
    }
  }
</script>


<style>
</style>
