import { actionTypes } from './action-types'
import {
  IAddTodoAction,
  ISetVisibilityFilterAction,
  IToggleTodoAction,
  IAsyncFunctionAction,
} from './types'

export const addTodo: IAddTodoAction = (id, text) => ({
  type: actionTypes.ADD_TODO,
  payload: {
    id,
    text,
  }
})

export const setVisibilityFilter: ISetVisibilityFilterAction = filter => ({
  type: actionTypes.SET_VISIBILITY_FILTER,
  payload: {
    filter,
  }
})

export const toggleTodo: IToggleTodoAction = id => ({
  type: actionTypes.TOGGLE_TODO,
  payload: {
    id
  }
})

export const asyncFunction: IAsyncFunctionAction = id => ({
  type: actionTypes.ASYNC_FUNCTION,
  payload: {
    id
  }
})