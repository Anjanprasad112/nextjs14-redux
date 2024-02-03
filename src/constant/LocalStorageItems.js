"use client";

export const getTodos =()=>{
    // return localStorage.getItem("todos");
    if (typeof window !== 'undefined'){
        return JSON.parse(localStorage.getItem("todos"))
    }
        
}

export const SaveTodos =(todos)=>{
    localStorage.setItem("todos", JSON.stringify(todos));
    return;
}
