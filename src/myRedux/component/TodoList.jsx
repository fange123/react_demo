// @ts-nocheck
import React from 'react'
import Todo from './Todo'
import { connect } from 'react-redux'
import {toggleTodo} from '../store/actions'
import  './index.less'


const TodoList = ({todos,onTodoClick})=> {
  return(
    <ul className='uls'>
      {
        todos.map((item)=> <Todo key={item.id} {...item} onClick={() => onTodoClick(item.id)} />)
      }

    </ul>
  )
}

const mapStateToProps = (state) => {
  const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case 'SHOW_COMPLETED':
      return todos.filter(t => t.completed)
    case 'SHOW_ACTIVE':
      return todos.filter(t => !t.completed)
    case 'SHOW_ALL':
    default:
      return todos
  }
}

  return {
    todos:getVisibleTodos(state.todos, state.visibilityFilter)
  }
}

const mapDispatchToProps = (dispatch) => {
  return{
    onTodoClick: id => {
      dispatch(toggleTodo(id))
    }

  }
}

export default connect(mapStateToProps,mapDispatchToProps)(TodoList)
