<template>
  <ul class="todo-list">
    <Task
      v-for="todo in allTodos"
      :key="todo.id"
      :task="todo"
    />
  </ul>
</template>

<script>
import { mapGetters } from 'vuex';
import Task from './Task';

export default {
  name: 'TasksList',
  components: { Task },
  data() {
    return {
    };
  },
  computed: {
    ...mapGetters([
      'allTodos',
    ]),
  },
};
</script>

<style scoped>
  .todo-list {
    margin: 0;
    padding: 0;
    list-style: none;
  }
</style>
