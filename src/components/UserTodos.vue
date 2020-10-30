<template>
  <div class="container">
    <input v-model="filterQuery">
    <div class="items">
      <div class="item" v-for="todo in filteredTodos" :key="todo.id">{{todo.title}}</div>
    </div>
  </div>
</template>

<script>

import useTodosAndSearch from '../composition/userTodos';

export default {
  name: 'UserTodos',
  props: {
    user: String
  },
  setup(props) {
    return useTodosAndSearch(props)
  },
  methods: {
    async getUserTodos() {
      const res = await fetch('http://jsonplaceholder.typicode.com/todos?userId=1')
      this.todos = await res.json()
    }
  }
}
</script>


<style scoped>

  .container {
    margin: 2rem 5rem;
  }

  input {
    background: none;
    border: 2px solid white;
    border-radius: 4px;
    padding: 0.5rem 1rem;
    color: white;
    position: relative;
    margin: 1rem;
  } 

  .items {
    color: white;
  }

  .item {
    margin: 1rem 0;
    padding: 0.5rem 1rem;
    background-color: rgb(27, 27, 27);
    border-radius: 4px;
  }

  .item:hover {
    background-color: rgb(22, 22, 22);
  }

</style>