import { combineReducers } from "redux";
import UserReducer  from '../components/User/store/reducer'

const reducer = combineReducers({
  user:UserReducer
})

export default reducer
