<template>
  <img v-if="loading" class="loader" src="@/assets/loader.gif">
  <div v-else>
    <router-link :to="{name: 'new'}" tag="button">Add Company</router-link>
    <table v-if="companies.length > 0">
      <thead>
        <tr>
        <th>ID</th>
        <th>Company</th>
        <th>Sign up token</th>
        <th>Fitness Clubs</th>
        <th>Programs</th>
        </tr>
      </thead>
      <tbody>
        <router-link tag="tr" v-for="company in companies" :key="company.id" :to="{name:'show', params: {id: company.id}}">

          <td>{{company.id}}</td>
          <td>{{company.name}}</td>
          <td>{{company.employee_signup_token}}</td>
          <td>
            <p v-for="club in company.fitness_clubs">{{club.name}}</p>
          </td>
          <td>
            <p v-for="program in company.club_programs">{{program.name}}</p>
          </td>
        </router-link>
      </tbody>
    </table>
  </div>
</template>

<script>
  import {mapState} from 'vuex'

  export default {
    computed: {
      ...mapState({
        companies: state => state.companies.companies,
        loading: state => state.companies.loading
      })
    }
  }
</script>

<style scoped>
  table, tr {
    border: 1px solid #2c3e50;
    border-collapse: collapse;
    margin: auto;
    min-width: 40%;
  }
  thead > tr {
    border-bottom: 2px solid #2c3e50;
  }
  tbody > tr {
    cursor: pointer;
  }
  tbody > tr:hover {
    background-color: #eee;
  }
  td, th {
    border: 1px solid #2c3e50;
    padding: 4px;
  }
  td > p {
    margin: 2px;
  }
  button {
    margin: 0 auto 20px auto;
    display: block;
  }
</style>
