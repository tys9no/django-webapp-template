import { combineReducers } from 'redux'
import names from './names'
import users from './users'
const reducers = combineReducers({
  names,
  users,
})

export default reducers
