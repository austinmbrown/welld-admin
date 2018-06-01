import Vue from 'vue';
import Vuex from 'vuex';
import companies from '@/features/companies/companiesStore.js'
import login from '@/features/login/loginStore.js'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules :{
    companies,
    login
  }
});


export default store
