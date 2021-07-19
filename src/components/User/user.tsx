import React from "react";
import './index.less'

export interface IUsers {
  [key:string] : any
}
interface IProps {
  users:IUsers
  handleDeleteOne:(id:number)=>void
}
const User:React.FC<IProps> = props => {
  const {handleDeleteOne} = props
  const handleDelete = (id:number)=> {
    handleDeleteOne(id)
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
