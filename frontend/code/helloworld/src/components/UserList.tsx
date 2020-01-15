import React from 'react'
import User from './User'
interface IUser {
  name: string;
  mail: string;
}

interface IProps {
  users: Array<IUser>
}

const UserList = ({ users }: IProps) => (
  <ul>
    {users.map((user, index) => (
      <User key={index} {...user} />
    ))}
  </ul>
)

export default UserList