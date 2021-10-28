// @ts-nocheck
import { Button, Input, message, Space } from 'antd'
import { connect } from 'react-redux'
import React,{useState} from 'react'
import { addTodo } from 'myRedux/store/actions'



const AddTodo = ({dispatch})=> {

  const [value, setValue] = useState('')

  const handleAdd = () => {
    if(!value.trim()){
      message.warn('请输入内容')
      return

    }else{
      dispatch(addTodo(value))
    }
  }
  return(
    <Space>
      <Input value={value}  onChange={e=>setValue(e.target.value)}/>
      <Button type='primary' onClick={handleAdd}>添加</Button>

    </Space>
  )
}

export default connect()(AddTodo)
