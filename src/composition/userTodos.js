import {ref, toRefs, onMounted, computed, watch} from 'vue'

function useTodosAndSearch(props) {

    const { user } = toRefs(props)
    console.log(user.value)
    const todos = ref([])
    const getUserTodos = async () => {
        const res = await fetch('http://jsonplaceholder.typicode.com/todos?userId=1')
        todos.value = await res.json()
    }
    onMounted(getUserTodos)
    watch(getUserTodos)
    
    const filterQuery = ref("")
    const filteredTodos = computed(() => {
      if (filterQuery.value) return todos.value
      return todos.value.filter(
        todo => todo.title.includes(filterQuery.value)
      )
    })

    return {
      todos,
      getUserTodos,
      filterQuery,
      filteredTodos
    }

}

export default useTodosAndSearch