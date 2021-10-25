import { Card } from 'antd'
import moment from 'moment'
import React, { useState } from 'react'
import CommentInput from './components/CommentInput'
import CommentShow from './components/CommentShow'
import  './index.less'

const Index = ()=> {

  const [commentList, setCommentList] = useState([{
    id:1,
    comment:'a啊啊啊啊啊',
    time:moment()
  }])

  // @ts-ignore
  const addComment = (info) => {
    setCommentList([...commentList,info])
  }

  // @ts-ignore
  const removeComment = (index) => {
    const newList = commentList
    newList.splice(index,1)
    setCommentList([...newList])
  }
  return(
   <div className='wrap'>
     <Card style={{width:500}}>
       {
         commentList.length > 0 ? commentList.map((item,index) => <CommentShow key={item.id} content={item} removeComment={()=>removeComment(index)}/>) : <span className='text'>请发表评论呦～</span>
       }

      <CommentInput addComment={addComment}/>
     </Card>
   </div>
  )
}

export default Index
