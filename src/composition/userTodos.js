import {ref, onMounted} from 'vue'

function getTodos(props) {

    const todos = ref([])
    const getUserTodos = async () => {
        const res = await fetch('http://jsonplaceholder.typicode.com/todos?userId=1')
        this.todos = await res.json()

        console.log('done')
    
    onMounted(getUserTodos)

    return {todos, getUserTodos}

    }  

}

export {getTodos}