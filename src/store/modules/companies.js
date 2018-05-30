import axios from 'axios';

export default {
  namespaced: true,

  state: {
    companies: []
  },

  getters: {

  },

  mutations: {
    setCompanies (state, companies) {
      state.companies = companies
    }
  },

  actions: {
    fetchCompanies({commit}) {
      axios.get('/admin/companies')
      .then(
        (response) => {
          commit('setCompanies', response.data.companies);
        },
        (error) => {
          console.log(error);
        }
      )
    }
  }
}
