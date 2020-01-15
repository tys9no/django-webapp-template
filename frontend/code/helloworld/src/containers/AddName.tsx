import React from 'react'
import { connect } from 'react-redux'
import { addName } from '../actions'

interface IProps{
  dispatch: Function;
}

let AddName = ({ dispatch }:IProps) => {
  let input:any
  return (
    <div>
      <form
        onSubmit={e => {
          e.preventDefault()
          if (!input.value.trim()) {
            return
          }
          dispatch(addName(input.value))
          input.value = ''
        }}
      >
        <input
          ref={node => {
            input = node
          }}
        />
        <button type="submit">Add Name</button>
      </form>
    </div>
  )
}
export default connect()(AddName)
