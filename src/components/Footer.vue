<template>
  <footer class="footer">
    <span class="todo-count">{{ uncompletedTasksCount }} items left</span>
    <TaskFilter />
    <button
      class="clear-completed"
      v-on:click="clearCompletedTasks()"
    >
      Clear completed
    </button>
  </footer>
</template>

<script>
import { mapMutations, mapGetters } from 'vuex';
import TaskFilter from './TaskFilter';

export default {
  name: 'Footer',
  components: { TaskFilter },
  data() {
    return {
    };
  },
  computed: {
    ...mapGetters([
      'uncompletedTasksCount',
    ]),
  },
  methods: {
    ...mapMutations([
      'clearCompletedTasks',
    ]),
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 15px;
    height: 40px;
    text-align: center;
    font-size: 15px;
    border-top: 1px solid #e6e6e6;
    color: gray;
  }

  .todo-count {
    text-align: left;
  }

  .clear-completed {
    position: relative;
    line-height: 20px;
    text-decoration: none;
    cursor: pointer;
  }

  .clear-completed:hover {
    text-decoration: underline;
  }

  .clear-completed:hover:active {
    text-decoration: none;
  }
</style>
