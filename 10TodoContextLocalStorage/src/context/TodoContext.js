import { useContext, createContext } from "react";

export const TodoContext = createContext({
    todos: [
        {
            id: 1,
            todo: "To do msg",
            completed:false,
        }
    ],
    addTodo: (todo) => { },
    updateTodo: (id, todo) => { },
    deleteTodo: (id) => { },
    togglComplete: (id) => { }, 
})



export const useTodo = () => {
    //always give useContext something 
    return useContext(TodoContext)
}

export const TodoProvider=TodoContext.Provider