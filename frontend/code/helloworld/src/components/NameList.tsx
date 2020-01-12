import React from 'react'
import Name from './Name'

interface IProps {
  names: Array<{name:string}>
}

const NameList = ({ names }:IProps) => (
  <ul>
    {names.map((name, index) => (
      <Name key={index} {...name} />
    ))}
  </ul>
)

export default NameList