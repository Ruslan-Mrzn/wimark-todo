import Vue from 'vue';
import Vuex from 'vuex';
import actions from './actions';
import mutations from './mutations';
import getters from './getters';

Vue.use(Vuex);

// eslint-disable-next-line import/prefer-default-export
export const store = new Vuex.Store({
  state: {
    todos: [],
  },
  actions,
  mutations,
  getters,
});
