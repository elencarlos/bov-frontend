import styled from 'styled-components'
import { COLORS } from '../../constants/theme'

const Container = styled.footer`
  display: flex;
  justify-content: center;
  justify-items: center;
  align-items: center;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  overflow: hidden;
  height: 30px;
  color: ${COLORS.white};
  background-color: ${COLORS.primary};
  margin-top: auto;
`
export default Container
