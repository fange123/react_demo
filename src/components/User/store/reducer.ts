import { DELETE_ALL, GET_ALL_LIST,ADD_LIST,DELETE_LIST } from "./constant";

export interface IUserList {
  id:number,
  name:string
  age:number
}
export interface IInitState {
  userList:IUserList[]

}
const initState : IInitState =  {
  userList: [
    { id: 1, name: "后盾人", age: 18 },
    { id: 2, name: "向军大叔", age: 19 },
    { id: 3, name: "张海宇", age: 18 }
  ]
}
const newList = (state:any,action:any) => {
  const content = action.payload
    const info = content.split('@')
    const newUser = {
      id:state.userList.length + 1,
      name:info[0],
      age:info[1]
    }
    return {userList:[...state.userList,newUser]}
}
const deleteNewList = (state:any,action:any) => {
  const newList = state.userList.filter((item:any) => item.id !== action.payload)
  return {userList:newList}

}


const UserReducer = (state = initState,action:any)=> {
  switch (action.type) {
    case DELETE_ALL:
      return {userList:[]}
    case GET_ALL_LIST:
      return {userList:state.userList}
    case ADD_LIST:
      return newList(state,action)
    case DELETE_LIST:
      return deleteNewList(state,action)
    default:
      return state
  }

}
export default UserReducer
