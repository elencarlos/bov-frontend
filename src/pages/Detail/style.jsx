import styled from 'styled-components'
import { COLORS } from '../../constants/theme'

const Container = styled.main`

`
const Content = styled.form`
  max-width: 1024px;
  margin: 0 auto;
  display: flex;
  gap: 20px;
  flex-direction: column;
  padding: 64px;
`

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

const ItemLabel = styled.label`
  color: ${COLORS.primary};
  font-size: 18px;
  font-weight: 400;
  margin-bottom: 5px;
`

const ItemData = styled.div`
  color: ${COLORS.primary};
  font-size: 24px;
  font-weight: 600;
`
const Item = styled.div`
  margin-bottom: 24px;
  display: flex;
  flex-direction: column;
`
export {
  Container,
  Content,
  ItemLabel,
  PrimaryTitle,
  UnderlineTitle,
  ItemData,
  Item,
}
