import { Action } from 'redux'

import { actionTypes } from './action-types'

interface IAction<T, P> extends Action<T> {
    type: T;
    payload: P;
}

export interface IAddTodo { id: number, text: string }
export interface ISetVisibilityFilter { filter: VisibilityFiltersEnum }
export interface IToggleTodo { id: number }
export interface IAsyncFunction { id: number }

export interface IAddTodoAction {
    (id: number, text: string): IAction<actionTypes.ADD_TODO, IAddTodo>
}

export interface ISetVisibilityFilterAction {
    (filter: VisibilityFiltersEnum): IAction<actionTypes.SET_VISIBILITY_FILTER, ISetVisibilityFilter>
}

export interface IToggleTodoAction {
    (id: number): IAction<actionTypes.TOGGLE_TODO, IToggleTodo>
}

export interface IAsyncFunctionAction {
    (id: number): IAction<actionTypes.ASYNC_FUNCTION, IAsyncFunction>
}

export type IActions = IAction<actionTypes.ADD_TODO, IAddTodo>
                     | IAction<actionTypes.SET_VISIBILITY_FILTER, ISetVisibilityFilter>
                     | IAction<actionTypes.TOGGLE_TODO, IToggleTodo>
                     | IAction<actionTypes.ASYNC_FUNCTION, IAsyncFunction>

export enum VisibilityFiltersEnum {
    SHOW_ALL,
    SHOW_COMPLETED,
    SHOW_ACTIVE,
}