import React from 'react'
import { StyledPrimaryButton } from './style'

function Button(props) {
  // eslint-disable-next-line react/prop-types
  const { children, ...rest } = props
  return (
    <StyledPrimaryButton type="button" {...rest}>{children}</StyledPrimaryButton>
  )
}

export default Button
