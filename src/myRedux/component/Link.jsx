// @ts-nocheck
import { Button } from 'antd'
import React from 'react'




const Link = ({active,children,onClick})=> {
  if(active){
    return <span style={{color:'#f1c40f'}}>{children}</span>
  }



  return(
   <Button type='link' onClick={onClick}>{children}</Button>
  )
}



export default Link
