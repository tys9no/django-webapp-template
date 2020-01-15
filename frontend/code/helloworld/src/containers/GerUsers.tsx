import React from 'react'
import { connect } from 'react-redux'
import { addUsers } from '../actions'

import * as RequestPromise from 'request-promise';

interface IProps{
  dispatch: Function;
}

let GetUsers = ({ dispatch }:IProps) => {
  return (
    <div>
      <button onClick={(e)=> {
        RequestPromise.get("http://localhost/api/users/")
        .then((users)=> {
          let usersJSON = JSON.parse(users)
          console.log(usersJSON)
          dispatch(addUsers(usersJSON))
        })
        .error((err) =>{
          console.log(err)
        })
      }} >Get</button>
    </div>
  )
}
export default connect()(GetUsers)
