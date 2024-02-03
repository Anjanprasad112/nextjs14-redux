"use client"
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { FcCheckmark,FcCancel } from "react-icons/fc";
import { toast } from 'react-toastify';
import { UpdateTodo, deleteTodo } from '@/lib/Todos';

const Todo = ({data,index})=>{

    const dispatch = useDispatch();
    const updateTodoByIndex = ()=>{
        dispatch(UpdateTodo(index));
        toast.info("Todo updated successfully");
    }
    const deleteTodoByIndex = ()=>{
        dispatch(deleteTodo(index));
        toast.success("Todo deleted successfully");

    }


    return (
        <tr className="border">
        <td className={`${data.isComplete}?'line-through':''`}>{data.id}</td>
        <td className={`${data.isComplete}?'line-through':''`}>{data.title}</td>
        <td className={`${data.isComplete}?'line-through':''`}>{data.description}</td>
        <td  className={`${data.isComplete}?'line-through m-auto text-center':'m-auto text-center'`}>{data.isComplete?<FcCheckmark />:<FcCancel/>}</td>
        <td className="flex justify-center gap-x-5">
            <button onClick={deleteTodoByIndex} className="px-6 py-2 text-white bg-red-500 rounded">Delete</button>
            <button onClick={updateTodoByIndex} className="px-6 py-2 text-white bg-orange-500 rounded">Update</button>
        </td>
        </tr>
    );
}

const Todos = () => {
    const todos = useSelector((state)=>state.todos.todos);
  return (
    <>
        <section className="py-10 w-full text-center">
            <table className="w-full border mx-auto table-auto ">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Title</th>
                        <th>Description</th>
                        <th>Status</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        todos && todos.length>0 ? todos.map((c,i)=>{
                            return <Todo key={i} data={c} index={i} />;
                        }) : <tr className="">
                            <td  colSpan={5} className="">No Data FOund</td>
                        </tr>
                    }
                        

                </tbody>
            </table>
        </section>
    </>
  )
}

export default Todos