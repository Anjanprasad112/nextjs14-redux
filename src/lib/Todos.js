import { SaveTodos, getTodos } from "@/constant/LocalStorageItems";
import { createSlice } from "@reduxjs/toolkit";

export const TodoSlice = createSlice({
        name: 'todos',
        initialState:{
            todos:getTodos() || []
        },
        reducers:{
            AddTodo(state,action){
                state.todos.push(action.payload);
                SaveTodos(state.todos);
            },
            UpdateTodo(state,action){
                state.todos = state.todos.filter((cur,i)=>{
                    if( i=== action.payload){
                        cur.isComplete = true
                    }
                    return cur;
                })
                SaveTodos(state.todos)
            },
            deleteTodo(state,action){
                state.todos = state.todos.filter((cur,i)=>i !== action.payload);
                SaveTodos(state.todos);
                // return;

            }
        }
})

export const {AddTodo,UpdateTodo,deleteTodo} = TodoSlice.actions

