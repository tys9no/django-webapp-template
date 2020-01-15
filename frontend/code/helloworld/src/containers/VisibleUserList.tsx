import { connect } from 'react-redux'
import UserList from '../components/UserList'

interface IUser {
  name:string;
  mail:string;
}

interface IState {
  users:Array<{name:string, mail:string}>
}
const mapStateToProps = (state:IState) => {
  return {
    users: state.users,
  }
}
const mapDispatchToProps = (dispatch:void) => {
  return {}
}
const VisibleUserList = connect(
  mapStateToProps,
  mapDispatchToProps
)(UserList)
export default VisibleUserList
