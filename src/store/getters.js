export default {
  allTodos(state) {
    return state.todos;
  },

  uncompletedTasksCount(state) {
    return state.todos.filter(({ completed }) => !completed).length;
  },

  todoFilters(state) {
    return state.todoFilters;
  },
};
