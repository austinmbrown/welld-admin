import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios';

Vue.use(Vuex)

const LOGIN = "LOGIN";
const LOGIN_SUCCESS = "LOGIN_SUCCESS";
const LOGOUT = "LOGOUT";

const store = new Vuex.Store({
  state: {
    isLoggedIn: !!localStorage.getItem("userToken") && !!localStorage.getItem("userId")
  },
  getters: {
    isLoggedIn: state => {
      return state.isLoggedIn
    }
  },
  actions: {
    login({ commit }, creds) {
      commit(LOGIN); // show spinner
      axios.post('/users/authenticate', creds)
      .then(
        (response) => {
          localStorage.setItem("userId", response.data.user.id);
          localStorage.setItem("userToken",response.data.user.authentication_token);
          commit(LOGIN_SUCCESS);
        },
        (error) => {
          console.log(error);
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
    [LOGOUT] (state) {
      state.isLoggedIn = false;
    }
  }
});


export default store
