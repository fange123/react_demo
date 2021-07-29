import React from "react";
import {Modal} from 'antd'
import { ExclamationCircleOutlined } from '@ant-design/icons';
import './index.less'

export interface IUsers {
  [key:string] : any
}
interface IProps {
  users:IUsers
  handleDeleteOne:(id:number)=>void
}
const {confirm}  = Modal

const User:React.FC<IProps> = props => {
  const {handleDeleteOne} = props
  const handleDelete = (id:number)=> {

    confirm({
      title: 'Are you sure delete this task?',
      icon: <ExclamationCircleOutlined />,
      okText: 'Yes',
      okType: 'danger',
      cancelText: 'No',
      content: `确认删除${id}号吗`,
      onOk:()=> {
      handleDeleteOne(id)
      },
      onCancel() {
        console.log('Cancel');
      },
    });
  }
    return (
      <tr style={{textAlign:'center'}}>
      	<td>{props.users?.id}</td>
        <td>{props.users?.name}</td>
        <td>{props.users?.age}</td>
        <td><button className="del-user-button" onClick={()=>handleDelete(props.users.id)}>删除</button></td>
      </tr>
    );
}
export default User
