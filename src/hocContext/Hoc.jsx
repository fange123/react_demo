import React from 'react'

import UseContext from './UseContent'

const Hoc = WrapComponent => {
  return(
    <div>
      <h2>哈哈哈哈哈</h2>
       <UseContext.Consumer>
          {
            user=><WrapComponent {...user}/>
          }
      </UseContext.Consumer>
    </div>
  )
}

export default Hoc
