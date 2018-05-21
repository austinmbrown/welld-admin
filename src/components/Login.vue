<template>
  <div>
    <h2>Login</h2>

    <form @submit.prevent='login'>
      <label for='username'>Username: </label>
      <input v-model='username' name='username'>

      <label for='password'>Password: </label>
      <input v-model='password' name='password' type='password'>

      <input type="submit" v-bind:disabled='formInvalid' value="Submit">
    </form>

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
      formInvalid: function() {
        return !this.username || !this.password;
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
          this.$router.push("admin_dashboard")
        });
      }
    }
  }
</script>


<style>
</style>
