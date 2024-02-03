// import Image from "next/image";
// import StoreProvider from "./StoreProvider.jsx";

"use client"

// import { ChangeClrtoClr } from "@/lib/ColorChange";
// import { Changeclr } from "@/lib/ColorChange";
import { useDispatch, useSelector } from "react-redux";
import dynamic from "next/dynamic";
const Todos = dynamic(()=>import('./(compoenets)/Todos'),{
  ssr: false
});
// import Todos from "./(compoenets)/Todos";
import { useState } from "react";
import { toast } from "react-toastify";
import { AddTodo } from "@/lib/Todos";

export default function Home() {
  const state = useSelector((state)=>state.todos.todos);

  //dispatch to show something trigger or perform
  const dispatch = useDispatch();
  // console.log({state})
  // const handleChange=()=>{
  //   dispatch(ChangeClrtoClr());
  // }
  const [form,setForm] = useState({
    title:"",
    description:"",
  })
  const onChangeHandler = (e)=>setForm({
    ...form,[e.target.name]:e.target.value
  })
  const onSubmitHandler = (e)=>{
    e.preventDefault();
    try{
      const item = {
        ...form,
        isComplete: false,
        id:new Date().getTime()
      }
      dispatch(AddTodo(item));
      
      toast.success("Todo Added");
    }
    catch(err){
      console.log(err)
    }
  }
   return (
   <>
      <div className="min-h-screen w-full md:w-[70%] mx-auto">
        <form onSubmit={onSubmitHandler} className="w-full mx-auto mb-3 py-10">
          <div className="mb-3">
            <label htmlFor="">Title</label>
            <input name="title" type="text" onChange={onChangeHandler}  className="w-full ring-blue-500 ring-1 py-4 border" placeholder="Enter title"/>
          </div>
          <div className="mb-3">
            <label htmlFor="">Description</label>
            <textarea rows={5}  name="description" onChange={onChangeHandler} className="w-full ring-blue-500 ring-1 py-4 border" placeholder="Enter Desc"/>
          </div>
          <div className="mb-3">
            <button type="submit" className="px-6 py-2 text-white bg-blue-500 rounded-md">Add Todo</button>
          </div>
        </form>
        <Todos/>
      </div>
   </>
  );
}
