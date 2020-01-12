import { connect } from 'react-redux'
import NameList from '../components/NameList'

interface IState {
  names:Array<{name:string}>
}
const mapStateToProps = (state:IState) => {
  return {
    names: state.names,
  }
}
const mapDispatchToProps = (dispatch:void) => {
  return {}
}
const VisibleNameList = connect(
  mapStateToProps,
  mapDispatchToProps
)(NameList)
export default VisibleNameList