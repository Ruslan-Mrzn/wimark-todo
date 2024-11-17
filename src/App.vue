<template>
  <section class="todoapp">
    <header class="todoapp__header">
      <h1 class="todoapp__title">todos</h1>
      <NewTaskForm />
    </header>
    <main><TasksList /></main>
    <Footer />
  </section>
</template>

<script>
import Footer from './components/Footer';
import NewTaskForm from './components/NewTaskForm';
import TasksList from './components/TasksList';


export default {
  name: 'App',
  components: {
    NewTaskForm,
    TasksList,
    Footer,
  },
  mounted() {
    const { dispatch } = this.$store;
    dispatch('getTodos');
  },
};
</script>

<style>
*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

button {
  margin: 0;
  padding: 0;
  border: 0;
  background: none;
  font-size: 100%;
  font-family: inherit;
  font-weight: inherit;
  color: inherit;
}

body {
  font:
    14px 'Helvetica Neue',
    Helvetica,
    Arial,
    sans-serif;
  line-height: 1.4em;
  background: #f5f5f5;
  color: #111111;
  min-width: 230px;
  max-width: 550px;
  margin: 0 auto;
  font-weight: 300;
}

.hidden {
  display: none;
}

.todoapp {
  background: #fff;
  box-shadow:
    0 2px 4px 0 rgba(0, 0, 0, 0.2),
    0 25px 50px 0 rgba(0, 0, 0, 0.1);
}

.todoapp__title {
  font-size: 60px;
  font-weight: 200;
  text-align: center;
  line-height: 1;
  color: rgba(175, 47, 47, 0.5);
  text-transform: uppercase;
}
</style>
