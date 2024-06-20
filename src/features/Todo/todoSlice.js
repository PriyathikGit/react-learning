import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState={
    todos:[{
        id:1,
        text: "hello world"
    }]
}

export const todoSlice = createSlice({
    name:"todo",
    initialState,
    reducers:{
        addTodo:(state,action) => {
            const todo = {          // our state
                id: nanoid(),
                text: action.payload  // put the same structure of todos array here, line 4
            }
            state.todos.push(todo)  // this is state, pushing in todos array
        },
        removeTodo:(state,action)=>{
            // current state of todos = current state of todos is filtering by prev todos callback
            // filter that todos whose current id is not equal to current todo, if this true remove that todo
            state.todos= state.todos.filter((todos)=> todos.id !== action.payload)
        }
    }
})


export const {addTodo,removeTodo} = todoSlice.actions

export default todoSlice.reducer