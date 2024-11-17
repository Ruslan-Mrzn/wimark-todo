export default {

  addTodosFromServer(state, todosFromServer) {
    const todos = todosFromServer.slice(0, 5)
      .map(({ id, title, completed }) => ({ id, title, completed, editing: false }));
    state.todos = state.todos.concat(todos);
  },

  addSingleTodo(state, todoText) {
    const newTodo = {
      id: state.todosId,
      title: todoText,
      completed: false,
      editing: false,
    };
    state.todos = [...state.todos, newTodo];
  },

};
