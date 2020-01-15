interface IAction {
  type: string
  users: Array<{name:string, mail:string}>
}

const users = (state = [], action:IAction) => {
  switch (action.type) {
    case 'GET_USERS':
      return state;
    case 'ADD_USERS':
      return [
        ...state,
        ...action.users,
      ]
    default:
      return state
  }
}
export default users