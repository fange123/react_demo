import React, { Component } from "react";

class Clock extends Component {
  /**
   * @param {any} props
   */
  constructor(props) {
    super(props);
    this.state = {
      data:new Date()
    }
  }

  updateTime(){
    this.setState({
      data:new Date()
    })
  }

  componentDidMount(){
   this.timeId = setInterval(()=> {
     this.updateTime()

   },1000)
  }

  componentWillUnmount(){
    clearInterval(this.timeId)

  }

  render() {
    return <div>
      当前时间  : {this.state.data.toLocaleTimeString()}
    </div>;
  }
}

export default Clock;
