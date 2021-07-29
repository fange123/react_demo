import {createStore,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import reducer from './reducer'
// import user from '../components/User/store/reducer'

const store = createStore(reducer, applyMiddleware(thunk))
export default store
