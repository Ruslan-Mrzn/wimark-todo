<template>
  <ul class="todo-list"><Task /></ul>
</template>

<script>
import Task from './Task';

export default {
  name: 'TasksList',
  components: { Task },
  data() {
    return {
    };
  },

};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .todo-list {
    margin: 0;
    padding: 0;
    list-style: none;
  }
</style>
