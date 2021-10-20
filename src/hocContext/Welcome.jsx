import React,{Component} from 'react'

class Welcome extends Component {
  render(){
    const {name,level} = this.props
    return (
      <div style={{background:'orange'}}>
      <h2>欢迎</h2>
      <p>昵称:{name}</p>
      <p>等级:{level}</p>

      </div>
    )
  }
}

export default Welcome
