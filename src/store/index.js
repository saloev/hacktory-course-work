import Vue from 'vue';
import Vuex from 'vuex';

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
      const url = new URL('http://localhost:3001');
      const response = fetch(url,
        {
          method: 'POST',
          body: payload,
        });
      const res = response.json();

      commit('saveUserData', res);
    },
  },
  modules: {
  },
});
