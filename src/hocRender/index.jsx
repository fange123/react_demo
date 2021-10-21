import React from 'react'
import MyComponent from './MyComponent'
import Position from './Position'
const Index = ()=> {
  return (
    <>
    <div>放一只猫吧</div>
      <Position render={(position)=> <MyComponent position={position}/>} />
    </>
  )
}

export default Index
