import styled from 'styled-components'
import { COLORS } from '../../constants/theme'

const StyledButton = styled.button`
  outline: none;
  cursor: pointer;
  background-color: transparent;
`

const RoundEdgesButton = styled(StyledButton)`
  border-radius: 100em;
  font-size: 28px;
  height: ${props => (props.height ? props.height : '64px')};
  width: ${props => (props.width ? props.width : '200px')};
  padding: 0 24px;
  margin: ${props => (props.margin ? props.margin : '0px')};
  justify-content: center;
  align-items: center;
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.3);
`

const StyledPrimaryButton = styled(RoundEdgesButton)`
  background-color: ${COLORS.primary};
  border: 1px solid transparent;
  color: ${COLORS.white};
  height: 39px;
  font-size: 16.8px;
  font-weight: 600;
  
`

export {
  StyledPrimaryButton,
}
