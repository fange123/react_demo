import React from "react";

class StateClass extends React.Component {
  //*在类组件中定义自己的状态
  /**
   * @param {any} props
   */
  constructor(props) {
    super(props);
    this.state = {
      name:'zhy'
    };
  }
  componentDidMount(){
    console.log('组件渲染结束');
  }
  render() {
    return <div>这是一个类组件{this.state.name}</div>;
  }
}

export default StateClass;
