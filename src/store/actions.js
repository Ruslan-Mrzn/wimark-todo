export default {
  async getTodos({ commit }) {
    try {
      commit('setRequestState', 'loading');
      const response = await fetch('https://jsonplaceholder.typicode.com/users/1/todos?_start=0&_limit=5');
      const data = await response.json();
      commit('addTodosFromServer', data);
      commit('setRequestState', 'success');
    } catch (e) {
      commit('setRequestState', 'error');
    }
  },
};
