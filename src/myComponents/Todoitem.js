import React from 'react'

const Todoitem = ({todo}) => {
  return (
    <div>
      <h4>{todo.title}</h4>
      <p>{todo.desc}</p>
      <button className="btn btn-sm btn-danger"onclick={onDelete}>delete</button>
    </div>
  )
}

export default todo
