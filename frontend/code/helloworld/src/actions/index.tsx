/*
 * action types
 */
export const ADD_NAME = 'ADD_NAME'
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
