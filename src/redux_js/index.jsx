// @ts-nocheck
import React from 'react'

const Index = ()=> {

  let myState = {
    todo:[{
      name:'zhy',
      age:18
    }],
    filter:'SHOE_ALL'
  }

  const action1 = {
    type:'ADD_TODO',
    text:'bjyx'
  }
  const action3 = {
    type:'ADD_TODO',
    text:'hhhhh'
  }
  const action2 = {
    type:'TOGGLE_FILTER',
    text:'SHOW_COMPLETED'
  }

  const vFilter = (state='SHOE_ALL',action) => {

    if(action.type === 'TOGGLE_FILTER'){
      return action.text
    }
    return state
  }

  const vTodo = (state=[],action) => {

    if(action.type === 'ADD_TODO'){
      return [...state,{name:action.text,age:20}]
    }
    return state
  }

  //~封装上面两个reducer

  const todoApi = (state={},action) => {
    return {
      todo: vTodo(state.todo,action),
      filter: vFilter(state.filter,action)
    }
  }


    // myState.filter = vFilter(myState.filter,action2);
    // myState.todo = vTodo(myState.todo,action1);

    myState = todoApi(myState,action3);
    console.log(myState);

  return(
    <div>123</div>
  )
}

export default Index
