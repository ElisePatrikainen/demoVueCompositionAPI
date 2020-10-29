<template>
  <div class="container">
    <input v-model="filterQuery">
    <div class="items">
      <div class="item" v-for="todo in filteredTodos" :key="todo.id">{{todo.title}}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'UserTodos',
  props: {
    user: String
  },
  data() {
    return {
      todos: [],
      filterQuery: ""
    }
  },
  computed: {
    filteredTodos() {
      if (!this.filterQuery) return this.todos
      return this.todos.filter(
        todo => todo.title.includes(this.filterQuery)
      )
    }
  },
  methods: {
    getUserTodos() {
      fetch('http://jsonplaceholder.typicode.com/todos?userId=1')
        .then(res => res.json())
        .then(data => this.todos = data)
    }
  },
  mounted() {
    this.getUserTodos()
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