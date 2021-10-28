import React from 'react'
import AddTodo from './component/AddTodo'
import Footer from './component/Footer'
import { Provider } from 'react-redux'
import reducer from './store/reducer'
import { createStore } from 'redux'
import { Card } from 'antd'
import TodoList from './component/TodoList'

const Index = ()=> {

  const store = createStore(reducer)
  return(
    <Card style={{width:500,margin:'auto'}}>
      <Provider store={store}>
    <AddTodo/>
    <TodoList/>
    <Footer/>

    </Provider>
    </Card>
  )
}

export default Index
