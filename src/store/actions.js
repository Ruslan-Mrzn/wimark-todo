export default {
  async getTodos({ commit }) {
    try {
      commit('setRequestState', {
        idle: false,
        loading: true,
      });
      const response = await fetch('https://jsonplaceholder.typicode.com/users/1/todos?_start=0&_limit=5');
      const data = await response.json();
      commit('addTodosFromServer', data);
      commit('setRequestState', {
        success: true,
      });
    } catch (e) {
      commit('setRequestState', {
        error: true,
      });
    } finally {
      commit('setRequestState', {
        loading: false,
      });
    }
  },
};
