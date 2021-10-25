import React, { useState } from 'react'
import { Button, Input } from 'antd';
import moment from 'moment';

const { TextArea } = Input;

// @ts-ignore
const CommentInput  = props => {

  const {addComment} = props

  const [text, setText] = useState('')

  return(
   <div style={{width:'400px'}}>
      <TextArea rows={4} value={text} onChange={(e)=>setText(e.target.value)}></TextArea>
      <Button type='primary' style={{marginTop:20}} onClick={()=>{
        addComment({
        id:Math.random(),
        comment:text,
        time:moment()
      })
      setText('')
      }}>发表</Button>
   </div>
  )

}

export default CommentInput
