import styled from 'styled-components'
import { COLORS } from '../../constants/theme'

const Container = styled.main`

`
const Form = styled.form`
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

const Input = styled.input`
  display: block;
  box-sizing: border-box;
  border: 1px solid ${COLORS.gray};
  width: 100%;
  padding: 12px 16px;
  border-radius: 5px;  
`
const Select = styled.select`
  display: block;
  box-sizing: border-box;
  border: 1px solid ${COLORS.gray};
  width: 100%;
  padding: 12px 16px;
  border-radius: 5px;  
`

const Label = styled.label`
  line-height: 1;
  text-align: left;
  display: block;
  margin-bottom: 13px;
  color: ${COLORS.primary};
  font-size: 18px;
  font-weight: 400;
`

const SubmitButton = styled.input`
  background: ${COLORS.primary};
  color: white;
  text-transform: uppercase;
  border: none;
  margin-top: 40px;
  padding: 20px;
  font-size: 16px;
  font-weight: 100;
  letter-spacing: 10px;
  border-radius: 5px;
  :hover {
    background: ${COLORS.secondary};
  }
  :active {
    border: 1px solid transparent;
    opacity: 0.8;
  }
`
export {
  Container,
  Form,
  Input,
  Label,
  PrimaryTitle,
  UnderlineTitle,
  SubmitButton,
  Select,
}
