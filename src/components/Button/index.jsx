import React from 'react'

function Button(props) {
  // eslint-disable-next-line react/prop-types
  const { children, ...rest } = props
  return (
    <button type="button" {...rest}>{children}</button>
  )
}

export default Button
