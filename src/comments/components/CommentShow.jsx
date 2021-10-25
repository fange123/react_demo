import React from 'react'
import { Comment, Tooltip, Avatar } from 'antd';
import "moment/locale/zh-cn"

// @ts-ignore
const CommentShow  = props => {

  const {content,removeComment} = props

  const actions = [
    <span onClick={removeComment}>删除</span>,
  ];

  return(
       <Comment
       actions={actions}
      author={<i>张大宝</i>}
      avatar={<Avatar src="https://joeschmoe.io/api/v1/random" alt="Han Solo" />}
      content={
        <p>
          {content.comment}
        </p>
      }
      datetime={
        <Tooltip title={content.time.format('YYYY-MM-DD HH:mm:ss')}>
          <span>{content.time.fromNow()}</span>
        </Tooltip>
      }

    />
  )

}

export default CommentShow
