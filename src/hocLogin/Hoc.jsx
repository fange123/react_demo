import React from "react";
import Login from "./Login";

// eslint-disable-next-line import/no-anonymous-default-export
export default (WrapComponent)=> {
  return (props)=> {
    const {isLogin} = props
     if(isLogin){
       return <WrapComponent {...props}/>
     }
     return <Login/>
  }
}
