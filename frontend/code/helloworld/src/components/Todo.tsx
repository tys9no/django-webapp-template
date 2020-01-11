import React from 'react';
import PropTypes from 'prop-types';

interface IProps {
  onClick: () => void;
  completed: boolean;
  text: string;
}

const Todo = (
  ({ onClick, completed, text }) => (
    <li
      onClick={onClick}
      style={{
        textDecoration: completed ? 'line-through' : 'none'
      }}
    >
      {text}
    </li>
  ) 
)as React.SFC<IProps>

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
}
export default Todo