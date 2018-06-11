<template>
  <div>
    <router-link to="/companies" tag="button">Cancel</router-link>
    <img v-if="loading" class="loader" src="@/assets/loader.gif">
    <form v-else @submit.prevent='submitCompany'>
      <div class="input-container">
        <label for='name'>Name: </label>
        <input v-model='new_company.name' name='name'>
      </div>
      <div class="input-container">
        <label for='contact_name'>Contact Name: </label>
        <input v-model='new_company.contact_name' name='contact_name'>
      </div>
      <div class="input-container">
        <label for='email'>Contact Email: </label>
        <input v-model='new_company.email' name='email'>
      </div>
      <div class="input-container">
        <label for='primary_phone'>Primary Phone Number: </label>
        <input v-model='new_company.primary_phone' name='primary_phone'>
      </div>
      <div class="input-container">
        <label for='employee_signup_token'>Employee Signup Token: </label>
        <input v-model='new_company.employee_signup_token' name='employee_signup_token'>
      </div>
      <div class="input-container">
        <label for='require_email_domain'>Require Email Domain: </label>
        <input type="checkbox" v-model='new_company.require_email_domain' name='require_email_domain'>
      </div>
      <div v-if="new_company.require_email_domain" class="input-container">
        <label for='email_domain'>Email Domain: </label>
        <input v-model='new_company.email_domain' name='email_domain'>
      </div>
      <div class="input-container">
        <label for='allow_clubs_to_add_employees'>Allow Clubs to Add Employees: </label>
        <input type="checkbox" v-model='new_company.allow_clubs_to_add_employees' name='allow_clubs_to_add_employees'>
      </div>
      <div class="input-container">
        <label for='program_registration_deadline'>Program Registration Deadline: </label>
        <input type="date" v-model='new_company.program_registration_deadline' name='program_registration_deadline'>
      </div>
      <input type="submit" v-bind:disabled='formInvalid' value="Submit">
    </form>
  </div>
</template>

<script>
  import {mapState} from 'vuex'

  export default {
    data: function() {
      return {
        new_company: {
          name: null,
          contact_name: null,
          email: null,
          primary_phone: null,
          employee_signup_token: null,
          require_email_domain: false,
          email_domain: null,
          allow_clubs_to_add_employees: false,
          program_registration_deadline: null
        }
      }
    },
    computed: {
      formInvalid() {
        return !this.new_company.name;
      },
      ...mapState({
        loading: state => state.companies.loading
      })
    },
    methods: {
      submitCompany: function() {
        this.$store.dispatch("companies/createCompany", this.new_company)
        .then(() => {
          this.$router.push('/companies')
        })
      }
    }
  }
</script>

<style scoped>
  form {
    max-width: 400px;
    margin: 20px auto;
  }
  .input-container {
    display: flex;
    justify-content: space-between;
    margin-bottom: 8px;
  }
</style>
