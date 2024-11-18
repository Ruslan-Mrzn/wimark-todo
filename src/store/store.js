import Vue from 'vue';
import Vuex from 'vuex';
import actions from './actions';
import mutations from './mutations';
import getters from './getters';

Vue.use(Vuex);

// eslint-disable-next-line import/prefer-default-export
export const store = new Vuex.Store({
  state: {
    todosId: 100,
    todos: [],
    todoFilters: {
      all: true,
      active: false,
      completed: false,
    },
    requestState: {
      idle: true,
      loading: false,
      error: false,
      success: false,
    },
  },
  actions,
  mutations,
  getters,
});
