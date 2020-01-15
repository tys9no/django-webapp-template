import React from 'react'
interface IProps {
  name: string;
  mail: string;
}

const Name = ({ name, mail }: IProps) => (
  <li >
    {name}
    {mail}
  </li>
)

export default Name
