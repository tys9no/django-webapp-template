/*
 * action types
 */
export const ADD_NAME = 'ADD_NAME'
export const GET_USERS = 'GET_USERS'
export const ADD_USERS = 'ADD_USERS'
/*
 * action creators
 */
export interface IAddName {
  type: string,
  name: string
}
export function addName(name:string) : IAddName{
  return { type: ADD_NAME, name: name }
}

/* Async get users */
export interface IGetUsers {
  type: string,
}
export function getUsers() : IGetUsers {
  return { type: GET_USERS }
}

export interface IAddUsers {
  type: string,
  users: Array<{name:string,mail:string}>,
}
export function addUsers(users:Array<{name:string,mail:string}>) : IAddUsers {
  return { type: ADD_USERS, "users": users }
}