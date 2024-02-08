import React,{useState} from "react";
import "./style-components/InputField.css";
import {Todo} from "./model"
import {TodoDisplay} from "./TodoDisplay"


export const InputField = () => {

  const[todo,setTodo]=useState<string>("");
  const[showTodo,setShowTodo]=useState<Todo[]>([])


  const handleSubmit = (e:React.FormEvent) => {
  e.preventDefault();
  if(todo===" "){
    
  }
  if(showTodo){
    setShowTodo([...showTodo,{id:Math.random(),todo:todo, isDone:false}])
  }
  setTodo("")
  };

  return (
    <>
    <div className="container">
    <form className="form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter a task"
        className="inputBox"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />

      <button className="submit-btn" type="submit">
        Go
      </button>
    </form>
    <TodoDisplay showTodo={showTodo} setShowTodo={setShowTodo} />
</div>
    </>

  );
};
