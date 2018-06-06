import axios from 'axios';

export default {
  state: {
    isLoggedIn: !!localStorage.getItem("userToken") && !!localStorage.getItem("userId"),
    pending: false
  },

  getters: {
    isLoggedIn: state => {
      return state.isLoggedIn
    },
    loginPending: state => {
      return state.pending
    }
  },

  mutations: {
    login (state) {
      state.pending = true;
    },
    loginSuccess (state) {
      state.isLoggedIn = true;
      state.pending = false;
    },
    loginFailure (state) {
      state.isLoggedIn = false;
      state.pending = false;
    },
    logout (state) {
      state.isLoggedIn = false;
    }
  },

  actions: {
    login({ commit }, creds) {
      commit('login'); // show loading state
      return axios.post('/users/authenticate', creds)
      .then(
        (response) => {
          localStorage.setItem("userId", response.data.user.id);
          localStorage.setItem("userToken",response.data.user.authentication_token);
          commit('loginSuccess');
        },
        (error) => {
          commit('loginFailure');
        }
      )
    },
    logout({ commit }) {
      localStorage.removeItem("userToken");
      localStorage.removeItem("userId");
      commit('logout');
    }
  }
}
