<template>
  <form
    class="new-todo-form"
    v-on:submit.prevent>
      <input
        class="new-todo-form__input"
        type="text"
        v-bind:value="newTaskText"
        v-on:input="taskTextInput"
        v-on:keyup.enter="addNewTask"
        placeholder="What needs to be done?"
        autofocus
      />
  </form>
</template>

<script>
import { mapMutations } from 'vuex';

export default {
  name: 'NewTaskForm',
  data() {
    return {
      newTaskText: '',
    };
  },
  methods: {
    taskTextInput(e) {
      this.newTaskText = e.target.value;
    },
    addNewTask() {
      this.addNewTodo(this.newTaskText);
      this.newTaskText = '';
    },
    ...mapMutations([
      'addNewTodo',
    ]),
  },
};
</script>

<style scoped>
  .new-todo-form {
    display: flex;
  }

  .new-todo-form__input {
    width: 100%;
    font-size: 24px;
    font-family: inherit;
    font-weight: inherit;
    line-height: 1.4em;
    color: inherit;
    padding: 6px 6px 6px 60px;
    border: none;
    box-shadow: inset 0 -1px 5px 0 rgba(0, 0, 0, 0.2);
    outline: none;
  }

  .new-todo-form__input::placeholder {
    font-style: italic;
    opacity: 0.7;
  }
</style>
