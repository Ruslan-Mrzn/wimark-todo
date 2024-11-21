<template>
  <form
    class="new-todo-form"
    v-on:submit.prevent>
      <input
        class="new-todo-form__input"
        :class="isInvalid ? 'new-todo-form__input_invalid' : ''"
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
      isInvalid: false,
    };
  },
  methods: {
    taskTextInput(e) {
      this.newTaskText = e.target.value;
    },
    addNewTask() {
      const trimmedText = this.newTaskText.trim();
      if (trimmedText === '') {
        this.isInvalid = true;
        setTimeout(() => { this.isInvalid = false; }, 1000);
        return;
      }
      this.addNewTodo(trimmedText);
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
    position: relative;
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

  .new-todo-form__input_invalid {
    animation: shake 0.82s cubic-bezier(.36,.07,.19,.97) both;
    transform: translate3d(0, 0, 0);
    outline: 2px solid rgba(175, 47, 47, 0.5);
  }

  .new-todo-form__input::placeholder {
    font-style: italic;
    opacity: 0.7;
  }

  @keyframes shake {
    10%, 90% {
      transform: translate3d(-1px, 0, 0);
    }

    20%, 80% {
      transform: translate3d(2px, 0, 0);
    }

    30%, 50%, 70% {
      transform: translate3d(-4px, 0, 0);
    }

    40%, 60% {
      transform: translate3d(4px, 0, 0);
    }
  }
</style>
