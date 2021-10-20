import Hoc from "./Hoc";
import Welcome from "./Welcome";
import React from "react";
import About from "./About";
import UseContext from "./UseContent";

const Index  = ()=> {
  return (

    <div>
      {
        <UseContext.Provider value={{name:'xz',level:999}}>
          {Hoc(About)}
        </UseContext.Provider>
      }
      {
        Hoc(Welcome)
      }
    </div>

  )
}

export default Index
