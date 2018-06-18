<template>
  <img v-if="loading" class="loader" src="@/assets/loader.gif">
  <div v-else>
    <h3>{{company.name}}</h3>
    <div class="row">
      <div>
        <h4>Connected fitness clubs:</h4>
        <ul>
          <li v-for="club in company.fitness_clubs">{{club.name}}</li>
        </ul>
      </div>
      <div>
        <h4>Available club programs:</h4>
        <ul>
          <li v-for="club in company.club_programs">{{club.name}}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  import {mapState} from 'vuex'

  export default {
    computed: {
      ...mapState({
        loading: state => state.companies.loading
      }),
      company() {
        return this.$store.getters.getCompanyById(this.$route.params.id)
      }
    }
  }
</script>

<style scoped>
  .row {
    display: flex;
    justify-content: space-around;
  }
  ul {
    text-align: left;
  }
</style>
