import styled from 'styled-components'
import { COLORS } from '../../constants/theme'

const PrimaryTitle = styled.h1`
  font-size: 36px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.2;
  letter-spacing: normal;
  text-align: left;
  color: ${COLORS.primary};
  margin-bottom: 16px;
`

const UnderlineTitle = styled.div`
  height: 4px;
  width: ${({ size }) => size};
  background-color: ${COLORS.primary};
  border-radius: 4px;
  margin-top: 4px;
`

export {
  PrimaryTitle,
  UnderlineTitle,
}
