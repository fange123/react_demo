import User, { IUsers } from './user'
import "./index.less";
import React, { ReactNode, useState } from 'react';
import Add from '../Add';

interface IProps {
  children:ReactNode,

}
const  List:React.FC<IProps>  = props => {
  const user =  [
    { id: 1, name: "后盾人", age: 18 },
    { id: 2, name: "向军大叔", age: 19 }
  ]
  const [users, setUsers] = useState<IUsers[]>(user)
  const handleDelete = () => setUsers([])
  const add = (param:string )=> {
    const info = param.split('@')
    const newUser = {
      id:users.length + 1,
      name:info[0],
      age:info[1]
    }
    setUsers([...users,newUser])
  }
  const handleDeleteOne = (id:number) => {
    setUsers(users.filter(item => item.id !== id))

  }


    return (
       <>
       <Add add = {add} users={users} />
        <table className='table'>
          <caption>{props.children}</caption>
          <thead>
            <tr>
            	<th>编号</th>
              <th>姓名</th>
              <th>年龄</th>
              <th>操作</th>
            </tr>
           {
             users.map(item => <User key={item.id} users={item} handleDeleteOne={handleDeleteOne}/>)
           }
          </thead>
        </table>
        <div>总共{users.length}人</div>
        <div className="delAll">
          <button onClick={handleDelete}>删除全部</button>
        </div>
       </>
    );
}
export default List
