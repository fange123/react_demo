import React, { useState } from 'react'
import styles from './index.less'

const Position = (props)=> {
  const {render} = props

  const [x, setX] = useState(0)
  const [y, setY] = useState(0)

  // @ts-ignore
  const onMouseMove = e => {
    setX(e.clientX)
    setY(e.clientY)

  }
  return (
    <div className={styles.wrap} onMouseMove={onMouseMove}>
      鼠标移动效果
      {
        render({left:x,top:y})
      }
    </div>
  )
}

export default Position
