import React,{Component} from 'react'
import axios from 'axios'
import { message } from 'antd'

export default class MyAxios extends Component {
  state={
    username:'zhy'
  }
componentDidMount(){
  // axios({
  //   url:'http://httpbin.org/get',
  //   method:'get',
  //   params:{
  //     username:this.state.username

  //   }

  // }).then(res=>{
  //   this.setState({username:res.data.args.username+'我爱你'})
  //   message.success('success')

  // }).catch(err=> {
  //   console.log(err);
  // })
  // TODO:get请求传参数用params，post请求用data

  axios.get('http://httpbin.org/get',{
    params:{
      username:this.state.username
    }
  }).then(res=>{
    this.setState({username:res.data.args.username+'我爱你'})
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
