import styled from 'styled-components'
import { COLORS } from '../../constants/theme'

const UserMenu = styled.div`
  width: 300px;
  display: flex;
  justify-items: center;
  justify-content: center;
  padding: 24px;
  `

const LoginButton = styled.div`
  background-color: ${COLORS.secondary};
  border: none;
  border-radius: 50px;
  color: ${COLORS.white};
  font-size: 16.8px;
  font-weight: 600;
  padding: 16px 20px;
  `

const Logo = styled.img`
  width: 200px;
`

const Container = styled.header`
  width: 100%;
  height: 130px;
  box-shadow: 0 3px 6px 0 rgba(0,0,0,0.25);
  background-color: #ffffff;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 24px 20%;
  box-sizing: border-box;
`

const Menu = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: row;
  gap: 20px;
`

export {
  Logo,
  Container,
  UserMenu,
  LoginButton,
  Menu,
}
