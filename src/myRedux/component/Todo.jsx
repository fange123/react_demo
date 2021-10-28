// @ts-nocheck
import React from 'react'
import  './index.less'



const Todo = ({text,completed,onClick})=> {
  return(
    <li onClick={onClick} className={completed ? 'li_style' : ''}>
      {text}
    </li>
  )
}

export default Todo
