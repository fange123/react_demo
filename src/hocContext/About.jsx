import React,{Component} from 'react'

class About extends Component {
  render(){
    const {name,level} = this.props
    return (
      <div style={{background:'pink'}}>
      <h2>关于</h2>
      <p>昵称:{name}</p>
      <p>等级:{level}</p>

      </div>
    )
  }
}

export default About
