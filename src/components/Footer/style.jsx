import styled from 'styled-components'
import { COLORS } from '../../constants/theme'

const Container = styled.footer`
  display: flex;
  justify-content: center;
  justify-items: center;
  align-items: center;
  align-self: flex-end;
  justify-self: flex-end;
  width: 100%;
  height: 30px;
  clear: both;
  position: relative;
  bottom: 0;
  color: ${COLORS.white};
  background-color: ${COLORS.primary};
`
export default Container
