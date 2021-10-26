import React,{Component} from 'react'
import request from '../utils/request'
import { message } from 'antd'

export default class MyAxios extends Component {
  state={
    username:'zhy'
  }
componentDidMount(){
//request是封装过的axios
   request.get('http://httpbin.org/get',{
    params:{
      username:this.state.username
    }
  }).then(res=>{
    // @ts-ignore
    this.setState({username:res.args.username+'我爱你'})
    message.success('success')

  }).catch(err=> {
    console.log(err);
  })

}

  render(){
    const {username} = this.state
    return(
      <div>
        {username}
      </div>
    )
  }
}
