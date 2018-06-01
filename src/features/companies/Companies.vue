<template>
  <div>
    <h2>Companies</h2>
    <img v-if="loading" class="loader" src="@/assets/loader.gif">
    <table v-else-if="companies.length > 0">
      <tr>
        <th>ID</th>
        <th>Company</th>
      </tr>
      <tr v-for="company in companies">
        <td>{{company.id}}</td>
        <td>{{company.name}}</td>
      </tr>
    </table>
  </div>
</template>


<script>
  import {mapState, mapActions} from 'vuex'

  export default {
    computed: {
      ...mapState({
        companies: state => state.companies.companies,
        loading: state => state.companies.loading
      })
    },
    methods: {
      ...mapActions({
        fetchCompanies: 'companies/fetchCompanies'
      })
    },
    created() {
      this.fetchCompanies()
    }
  }
</script>

<style>
  table, tr {
    border: 1px solid #2c3e50;
    border-collapse: collapse;
    margin: auto;
    min-width: 40%;
  }
  tr:first-of-type {
    border-bottom: 2px solid #2c3e50;
  }
  td, th {
    border: 1px solid #2c3e50;
  }
</style>
