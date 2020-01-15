interface IAction {
  type: string,
  id: number,
  name: string
}

const names = (state = [], action:IAction) => {
  switch (action.type) {
    case 'ADD_NAME':
      return [
        ...state,
        {
          id: action.id,
          name: action.name,
        }
      ]
    default:
      return state
  }
}
export default names
