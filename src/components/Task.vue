<template>
  <li
    class="task"
    :class="[this.task.completed ? 'task_completed' : '', this.task.editing ? 'task_editing' : '']"
  >
    <div class="view">
      <input
        class="toggle"
        type="checkbox"
        :checked="this.task.completed"
      />
      <label>
        <span class="title">{{ this.task.title }}</span>
      </label>
      <button class="icon icon-edit"></button>
      <button class="icon icon-destroy"></button>
    </div>
    <input
      type="text"
      class="edit"
    />
  </li>
</template>

<script>


export default {
  name: 'Task',
  data() {
    return {
    };
  },
  props: ['task'],
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
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

  .toggle + label{
    background-image: url('../assets/checkbox.svg');
    background-repeat: no-repeat;
    background-position: center left;
  }

  .toggle:checked + label {
    background-image: url('../assets/checkbox_checked.svg');
  }

  label {
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
