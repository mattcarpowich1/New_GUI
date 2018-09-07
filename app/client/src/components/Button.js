import React from 'react'

const Button = ({
  children,
  handleMouseIn,
  handleMouseOut
}) => (
  <button
    style={buttonStyle}
    onMouseOver={handleMouseIn}
    onMouseLeave={handleMouseOut}>
    { children }
  </button>
)

const buttonStyle = {
  outline: 'none'
}

export default Button
