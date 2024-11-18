export default {

  addTodosFromServer(state, todosFromServer) {
    const todos = todosFromServer.slice(0, 5)
      .map(({ id, title, completed }) => ({ id, title, completed, editing: false }));
    state.todos = state.todos.concat(todos);
  },

  addNewTodo(state, todoText) {
    const newTodo = {
      id: state.todosId,
      title: todoText,
      completed: false,
      editing: false,
    };
    state.todos = [...state.todos, newTodo];
    state.todosId += 1;
  },

  deleteTodo(state, taskId) {
    const index = state.todos.findIndex(({ id }) => id === taskId);
    state.todos = [...state.todos.slice(0, index), ...state.todos.slice(index + 1)];
  },

  editTodo(state, taskId) {
    const index = state.todos.findIndex(({ id }) => id === taskId);
    const editingTask = { ...state.todos[index], editing: true };
    state.todos = [...state.todos.slice(0, index), editingTask, ...state.todos.slice(index + 1)];
  },

  submitEditingTodo(state, { taskId, text }) {
    const index = state.todos.findIndex(({ id }) => id === taskId);
    const editingTask = { ...state.todos[index], editing: false, title: text };
    state.todos = [...state.todos.slice(0, index), editingTask, ...state.todos.slice(index + 1)];
  },

  toggleCompletedTodo(state, taskId) {
    const index = state.todos.findIndex(({ id }) => id === taskId);
    const editingTask = { ...state.todos[index], completed: !state.todos[index].completed };
    state.todos = [...state.todos.slice(0, index), editingTask, ...state.todos.slice(index + 1)];
  },

  clearCompletedTasks(state) {
    state.todos = [...state.todos.filter(({ completed }) => !completed)];
  },

  setFilterActiveTodos(state) {
    state.todoFilters = {
      all: false,
      active: true,
      completed: false,
    };
  },

  setFilterAllTodos(state) {
    state.todoFilters = {
      all: true,
      active: false,
      completed: false,
    };
  },

  setFilterCompletedTodos(state) {
    state.todoFilters = {
      all: false,
      active: false,
      completed: true,
    };
  },

};
