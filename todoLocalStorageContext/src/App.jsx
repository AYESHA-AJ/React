
import { useEffect, useState } from 'react'
import './App.css'
import { TodoProvider } from './contexts'
import { TodoForm, TodoItem } from './components'

function App() {
 
  const [todos, setTodos] = useState([])
  

  //make sure name is same as that in value
  const addTodo = (todo) => {
    //to access old todos
    setTodos((prev)=>[...prev,{id:Date.now(),...todo}])
  }
  

  const updateTodo = (id, todo) => {
   //if id is found then update with latest todo else if not found then keep the previous todo 
    setTodos((prev) => prev.map((prevTodo) => (prevTodo.id === id ? todo : prevTodo)))
    
  }

  const deleteTodo = (id) => {
    setTodos((prev)=>(prev.filter((todo)=>todo.id!==id)))
  }

  const toggleComplete = (id) => {
    
    setTodos((prev)=>prev.map((prevTodo)=>(prevTodo.id===id?{...prevTodo,completed:!prevTodo.completed}:prevTodo)))
  }

  //to retrieve all data from local storage as soon as application is loaded 
  useEffect(() => {
    //local storage  is directly accessed (just for react) not for server side rendering as local storage is only on browser
    const todos = JSON.parse(localStorage.getItem("todos"))

    if (todos && todos.length>0) {
      setTodos(todos)
    }
  }, [])
  
  useEffect(() => {
//local storage stores everything in string
    localStorage.setItem("todos",JSON.stringify(todos))
  },[todos])
  return (
    //before defining functionality we need todo provider bcoz its gonna wrap eerything
    <TodoProvider value={{ todos, addTodo, updateTodo, deleteTodo, toggleComplete }}>
    <div className="bg-[#172842] min-h-screen py-8">
    <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
        <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
        <div className="mb-4">
            {/* Todo form goes here */} 
            <TodoForm/>
        </div>
        <div className="flex flex-wrap gap-y-3">
            {/*Loop and Add TodoItem here */}
            {todos.map((todo) => (
              <div key={todo.id} className='w-full'>
                <TodoItem todo={todo} />

              </div>
            ))}
        </div>
    </div>
      </div>
      </TodoProvider>
  )
}

export default App
