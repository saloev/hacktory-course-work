import Vue from 'vue';
import Vuex from 'vuex';

import * as API_CONF from '../config';
import API from './api';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: null,
  },
  mutations: {
    saveUserData(state, payload) {
      state.user = payload;
    },
  },
  actions: {
    userAuth({ commit }, payload) {
      API.fetchData(`${API_CONF.API_URL}/auth`, payload).then((res) => {
        commit('saveUserData', res);
      }).catch((err) => {
        console.error(err);
      });
    },
  },
  modules: {
  },
});
