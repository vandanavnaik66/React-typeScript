import React from 'react'
import { Todo } from './model'
import { SingleTodo } from './SingleTodo';

interface Props{
    showTodo:Todo[];
    setShowTodo:React.Dispatch<React.SetStateAction<Todo[]>>
}

export const TodoDisplay = ({showTodo,setShowTodo}:Props) => {
  return (
<>
{showTodo.map((todo)=>(
    <SingleTodo key={todo.id} 
    todo={todo}
    showTodo={showTodo}
    setShowTodo={setShowTodo}
    />
)  )}
</>  )
}
