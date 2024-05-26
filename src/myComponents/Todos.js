import React from 'react'
import {Todoitem} from "./Todoitem"
const Todos = (props) => {
  return (
    <div className="container">
     <h3 className="text-center my-3">Todos list</h3> 
     {props.todos.map((todo)=>{
      return(
      <>
      <h3>this</h3>
      <Todoitem todo={todo} kry={todo.sno} onDelete={props.onDelete}/>
      </>)
     })}
         </div> 
     
  )
}

export default Todos
