import styled from 'styled-components'
import { COLORS } from '../../constants/theme'

const Container = styled.footer`
  display: flex;
  justify-content: center;
  justify-items: center;
  align-items: center;
  width: 100%;
  height: 30px;
  clear: both;
  position: absolute;
  bottom: 0;
  background-color: ${COLORS.gray};
`
export default Container
