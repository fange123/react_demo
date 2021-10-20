import React from "react";
import Cart from "./Cart";
import Hoc from "./Hoc";

// eslint-disable-next-line import/no-anonymous-default-export
export default ()=> {

  const NewComponent = Hoc(Cart)
  return(
    <div>
      <NewComponent isLogin={true}/>
      <NewComponent isLogin={false}/>

    </div>
  )
}
