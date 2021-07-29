import { DELETE_ALL, GET_ALL_LIST,ADD_LIST ,DELETE_LIST} from "./constant";

export const deleteAll = ()=> ({
  type:DELETE_ALL
})
export const getUserList = ()=> ({
  type:GET_ALL_LIST
})
export const addUserList = (param:any)=> ({
  type:ADD_LIST,
  payload:param
})
export const deleteUserList = (param:any)=> ({
  type:DELETE_LIST,
  payload:param
})
