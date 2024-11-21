export default {
  allTodos(state) {
    return state.todos;
  },

  todoFilters(state) {
    return state.todoFilters;
  },

  requestState(state) {
    return state.requestState;
  },

  completedTodos(state) {
    return state.todos.filter(({ completed }) => completed);
  },

  activeTodos(state) {
    return state.todos.filter(({ completed }) => !completed);
  },
};
