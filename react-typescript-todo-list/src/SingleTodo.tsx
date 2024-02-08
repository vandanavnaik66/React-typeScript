import React, { useEffect, useRef, useState } from "react";
import { Todo } from "./model";
import { AiFillEdit } from "react-icons/ai";
import { MdDelete } from "react-icons/md";
import { MdOutlineDone } from "react-icons/md";
import "./style-components/SingleTodo.css";

interface Props {
  todo: Todo; // each object that means model of object we have created
  showTodo: Todo[]; // array of object
  setShowTodo: React.Dispatch<React.SetStateAction<Todo[]>>;
}

export const SingleTodo = ({ todo, showTodo, setShowTodo }: Props) => {

    const[editMode,setEditMode]=useState<boolean>(false)
    const[editTodo,setEditTodo]=useState<string>(todo.todo)
    const editInputRef=useRef<HTMLInputElement>(null);

  const handleDone = (id: number) => {
    setShowTodo(
      showTodo.map((todo) =>
        todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
      )
    );
  };

  const deleteTodo = (id: number) => {
    setShowTodo(showTodo.filter((todo) => todo.id !== id));
  };

  const handleEdit=()=>{
    if(!editMode && !todo.isDone){
      setEditMode(true) 
    }
  }
const handleEditSubmit=(e : React.FormEvent,id:number)=>{
    e.preventDefault();
    setShowTodo(showTodo.map((todo)=> 
    (todo.id===id ? {...todo, todo:editTodo} : todo)))
    setEditMode(false);
}

useEffect(()=>{
    editInputRef.current?.focus();
},[editMode])

  return (
    <form className="form" onSubmit={(e)=>handleEditSubmit(e,todo.id)}>
      <div className="singleTodo-container">
        {
        editMode? (<input 
            className="editInput" 
            value={editTodo} 
        onChange={(e)=>setEditTodo(e.target.value)} 
        ref={editInputRef}/>):
        todo.isDone ? (
          <s className="todo-text">{todo.todo}</s>
        ) : (

            <span className="todo-text">{todo.todo}</span>
        )}
        <div>
          <span onClick={handleEdit}>
            <AiFillEdit />
          </span>
          <span onClick={() => deleteTodo(todo.id)}>
            <MdDelete />
          </span>
          <span onClick={() => handleDone(todo.id)}>
            <MdOutlineDone />
          </span>
        </div>
      </div>
    </form>
  );
};
