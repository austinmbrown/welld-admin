import axios from 'axios';

const LOGIN = "LOGIN";
const LOGOUT = "LOGOUT";
const LOGIN_SUCCESS = "LOGIN_SUCCESS";
const LOGIN_FAILURE = "LOGIN_FAILURE";

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
  actions: {
    login({ commit }, creds) {
      commit(LOGIN); // show loading state
      return axios.post('/users/authenticate', creds)
      .then(
        (response) => {
          localStorage.setItem("userId", response.data.user.id);
          localStorage.setItem("userToken",response.data.user.authentication_token);
          commit(LOGIN_SUCCESS);
        },
        (error) => {
          commit(LOGIN_FAILURE);
        }
      )
    },
    logout({ commit }) {
      localStorage.removeItem("userToken");
      localStorage.removeItem("userId");
      commit(LOGOUT);
    }
  },
  mutations: {
    [LOGIN] (state) {
      state.pending = true;
    },
    [LOGIN_SUCCESS] (state) {
      state.isLoggedIn = true;
      state.pending = false;
    },
    [LOGIN_FAILURE] (state) {
      state.isLoggedIn = false;
      state.pending = false;
    },
    [LOGOUT] (state) {
      state.isLoggedIn = false;
    }
  }
}
