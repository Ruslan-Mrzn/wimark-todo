<template>
  <ul class="filters">
      <li>
        <button class="selected">
          All
        </button>
      </li>
      <li>
        <button>
          Active
        </button>
      </li>
      <li>
        <button>
          Completed
        </button>
      </li>
    </ul>
</template>

<script>
// import Task from './Task';

export default {
  name: 'TaskFilter',
  data() {
    return {
    };
  },

};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .filters {
    margin: 0;
    padding: 0;
    list-style: none;
    right: 0;
    left: 0;
  }

  li {
    display: inline;
    cursor: default;
  }

  button {
    display: inline-block;
    color: inherit;
    margin: 3px;
    padding: 3px 7px;
    text-decoration: none;
    border: 1px solid transparent;
    border-radius: 3px;
  }

  button:not(.selected) {
    cursor: pointer;
  }

  li:hover button {
    border-color: rgba(175, 47, 47, 0.1);
  }
  li:hover .selected {
    border-color: rgba(175, 47, 47, 0.2);
  }

  .selected {
    border-color: rgba(175, 47, 47, 0.2);
  }
</style>
