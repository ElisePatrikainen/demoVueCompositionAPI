<template>
  <img alt="Vue logo" style="height: 50px" src="./assets/logo.png" />
  <UserTodos user="1" />
</template>

<script>
import UserTodos from './components/UserTodos.vue'

export default {
  name: 'App',
  components: {
    UserTodos
  }
}
</script>
