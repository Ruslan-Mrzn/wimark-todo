<template>
  <li
    class="task"
    :class="[
      task.completed ? 'task_completed' : '',
      task.editing ? 'task_editing' : '',
      task.completed&&todoFilters.active ? 'hidden' : '',
      !task.completed&&todoFilters.completed ? 'hidden' : '',
    ]"
  >
    <div class="view">
      <input
        class="toggle"
        type="checkbox"
        :checked="task.completed"
        v-on:change="toggleCompletedTodo(task.id)"
      />
      <p>
        <span class="title">{{ task.title }}</span>
      </p>
      <button class="icon icon-edit" v-on:click="onEditClick()"></button>
      <button class="icon icon-destroy" v-on:click="deleteTodo(task.id)"></button>
    </div>
    <input
      type="text"
      class="edit"
      :class="isInvalid ? 'edit_invalid' : ''"
      v-bind:value="taskText"
      v-on:input="taskTextInput"
      v-on:keyup.enter="saveChanges()"
      autofocus
    />
  </li>
</template>

<script>
import { mapMutations, mapGetters } from 'vuex';

export default {
  name: 'Task',
  data() {
    return {
      taskText: this.task.title,
      isInvalid: false,
    };
  },
  props: ['task'],
  computed: {
    ...mapGetters([
      'todoFilters',
    ]),
  },
  methods: {
    ...mapMutations([
      'deleteTodo',
      'editTodo',
      'submitEditingTodo',
      'toggleCompletedTodo',
    ]),
    taskTextInput(e) {
      this.taskText = e.target.value;
    },
    saveChanges() {
      const trimmedText = this.taskText.trim();
      if (trimmedText === '') {
        this.isInvalid = true;
        setTimeout(() => { this.isInvalid = false; }, 1000);
        return;
      }
      this.submitEditingTodo({ taskId: this.task.id, text: trimmedText });
    },
    onEditClick() {
      this.editTodo(this.task.id);
      this.taskText = this.task.title;
    },
  },
};
</script>

<style scoped>
  .task {
    position: relative;
    font-size: 24px;
    border-bottom: 1px solid #ededed;
  }

  .task:last-child {
    border-bottom: none;
  }

  .task_editing {
    border-bottom: none;
    padding: 0;
  }

  .task_editing .edit {
    display: block;
    width: calc(100% - 43px);
    padding: 12px 16px;
    margin: 0 0 0 43px;
    font-size: inherit;
    line-height: 1.2;
    font-weight: 400;
    color: #4d4d4d;
    outline: none;
  }

  .task_editing .edit_invalid {
    animation: shake 0.82s cubic-bezier(.36,.07,.19,.97) both;
    transform: translate3d(0, 0, 0);
    border-color: rgba(175, 47, 47, 0.5);
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

  .task_editing .view {
    display: none;
  }

  .toggle {
    text-align: center;
    width: 40px;
    height: auto;
    position: absolute;
    top: 0;
    bottom: 0;
    margin: auto 0;
    border: none;
    -webkit-appearance: none;
    appearance: none;
    cursor: pointer;
    opacity: 0;
  }

  .toggle + p{
    background-image: url('../assets/checkbox.svg');
    background-repeat: no-repeat;
    background-position: center left;
  }

  .toggle:checked + p {
    background-image: url('../assets/checkbox_checked.svg');
  }

  p {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 15px 85px 15px 60px;
  }

  .view {
    position: relative;
  }

  .title {
    word-break: break-all;
    display: block;
    line-height: 1.2;
    transition: color 0.4s;
    font-weight: 400;
    color: #4d4d4d;
  }

  .task_completed .title {
    color: #cdcdcd;
    text-decoration: line-through;
  }

  .icon {
    width: 30px;
    height: 40px;
    font-size: 34px;
    color: #cc9a9a;
    margin: auto 0;
    transition: color 0.2s ease-out;
    cursor: pointer;
  }

  .icon:hover {
    color: #af5b5e;
  }

  .icon-destroy {
    position: absolute;
    top: 0;
    bottom: -3px;
    right: 10px;
  }

  .icon-destroy:after {
    content: '×';
  }

  .icon-edit {
    position: absolute;
    top: 0;
    bottom: -3px;
    font-size: 19px;
    right: 45px;
  }

  .icon-edit:after {
    content: '✎';
  }

  .edit {
    display: none;
  }

  .task_editing:last-child {
    margin-bottom: -1px;
  }
</style>
