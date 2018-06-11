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
    fetchCompanies ({commit}) {
      commit('startLoading')
      return axios.get('/admin/companies')
      .then(
        (response) => {
          commit('setCompanies', response.data.companies);
          commit('finishLoading')
        },
        (error) => {
          console.log(error);
        }
      )
    },
    createCompany ({commit}, new_company) {
      commit('startLoading')
      return axios.post('admin/companies', {'company': new_company})
      .then(
        () => {commit('finishLoading')}
      )
    }
  }
}
