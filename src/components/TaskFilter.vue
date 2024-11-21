<template>
  <ul class="filters">
      <li>
        <button
          :class="todoFilters === 'all' ? 'selected' : ''"
          v-on:click="setFilter('all')"
          >
          All
        </button>
      </li>
      <li>
        <button
          :class="todoFilters === 'active' ? 'selected' : ''"
          v-on:click="setFilter('active')"
          >
          Active
        </button>
      </li>
      <li>
        <button
          :class="todoFilters === 'completed' ? 'selected' : ''"
          v-on:click="setFilter('completed')"
          >
          Completed
        </button>
      </li>
    </ul>
</template>

<script>
import { mapMutations, mapGetters } from 'vuex';

export default {
  name: 'TaskFilter',
  data() {
    return {
    };
  },
  computed: {
    ...mapGetters([
      'todoFilters',
    ]),
  },
  methods: {
    ...mapMutations([
      'setFilter',

    ]),
  },
};
</script>

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
