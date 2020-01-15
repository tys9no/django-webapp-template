import React from 'react'
interface IProps {
  name: string
}

const Name = ({ name }: IProps) => (
  <li >
    {name}
  </li>
)

export default Name
