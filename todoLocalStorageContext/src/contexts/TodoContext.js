import { createContext, useContext } from "react";

export const TodoContext = createContext({
    //its a property
    todos: [
        {
            id: 1,
            todo: "Todo message or title",
            completed:false
        }
    ]
    //for functionality we just write names not definiton
    , addTodo: (todo) => { },
    updateTodo: (id, todo) => { },
    deleteTodo: (id) => { },
    toggleComplete: (id) => { }
    
})


//creating hook
export const useTodo = () => {
    //whenever you take use context you give a context to it 
    return useContext(TodoContext)
}

export const TodoProvider = TodoContext.Provider

//whenever u make a context of to do there will be default values 