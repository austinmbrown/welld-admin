import axios from 'axios';

export default {
  namespaced: true,

  state: {
    companies: [],
    loading: false
  },

  getters: {

  },

  mutations: {
    startLoading (state) {
      state.loading = true
    },
    finishLoading (state) {
      state.loading = false
    },
    setCompanies (state, companies) {
      state.companies = companies
    }
  },

  actions: {
    fetchCompanies({commit}) {
      commit('startLoading')
      axios.get('/admin/companies')
      .then(
        (response) => {
          commit('setCompanies', response.data.companies);
          commit('finishLoading')
        },
        (error) => {
          console.log(error);
        }
      )
    }
  }
}
