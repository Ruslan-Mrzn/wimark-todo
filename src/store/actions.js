export default {
  async getTodos({ commit }) {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/users/1/todos');
      const data = await response.json();
      commit('addTodosFromServer', data);
    } catch (e) {
      console.error(e);
    }
  },
};
