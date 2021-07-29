import User, { IUsers } from './user'
import "./index.less";
import React, { ReactNode, useEffect, useState } from 'react';
import Add from '../Add';
import { connect ,useDispatch} from 'react-redux';
import { deleteAll, getUserList,addUserList ,deleteUserList} from './store/actionCreator';
import { IUserList } from './store/reducer';

interface IConnect {


}

interface IProps extends IConnect {
  children:ReactNode,
  userList:IUserList[]

}
const  List:React.FC<IProps>  = props => {
  const { userList } = props

 const dispatch = useDispatch()

  const [users, setUsers] = useState<IUsers[]>(userList)
  useEffect(() => {
    dispatch(getUserList())

  }, [])
const handleDelete = () => {
  dispatch(deleteAll())
}

  useEffect(() => {
    setUsers(userList)

  }, [userList])

  const deleteOne = (id:number) => {
    dispatch(deleteUserList(id))
  }

  const addUser = (params:any) => {
    dispatch(addUserList(params))
  }


    return (
       <>
       <Add add = {addUser} users={users} />
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
             users.map(item => <User key={item.id} users={item} handleDeleteOne={deleteOne}/>)
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
const mapStateToProps = (state:any) => {

  return {
    userList:state.user?.userList
  }
}

export default connect(mapStateToProps)(List)
