import styled from 'styled-components'
import { COLORS } from '../../constants/theme'

const Container = styled.main`
  margin: 0 auto;
  max-width: 960px;
  padding: 64px 0;
`
const Card = styled.div`
  border-bottom: 1px solid #cccccc;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 1rem;
  a {
    text-decoration: none;
    color: ${COLORS.secondary};
  }
  padding: 1rem;
 `
const CheckListData = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 16px;
  a {
    text-decoration: none;
    color: ${COLORS.secondary};
  }
 `

const FarmerName = styled.div`
  font-size: 24px;
`

const FromName = styled.div`
  font-size: 16px;
`
const FarmerCity = styled.div`
  font-size: 18px;
`
const CheckListCreated = styled.div`
  font-size: 12px;
`
const Actions = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100px;
  align-items: center;
`

export {
  Container,
  Card,
  FarmerName,
  FarmerCity,
  CheckListCreated,
  Actions,
  FromName,
  CheckListData,
}
