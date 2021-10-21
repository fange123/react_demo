import React from 'react'
import myPng from '../assets/cat.jpeg'
import styles from './index.less'

const MyComponent = (props)=> {
  const {position:{left,top}} = props

  return (
    <div style={{left:`${left}px`,top:`${top}px`}} className={styles.my}>
      <img src={myPng} alt="" />
    </div>
  )
}

export default MyComponent
