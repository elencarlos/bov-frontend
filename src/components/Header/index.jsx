import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/bov-platform.svg'
import {
  Container, LoginButton, Logo, Menu, UserMenu,
} from './style'

function Header() {
  return (
    <Container>
      <div>
        <Link to="/home">
          <Logo src={logo} alt="logo" />
        </Link>
      </div>
      <nav>
        <Menu>
          <li><Link to="/home">Home</Link></li>
          <li><Link to="/form">BovControl</Link></li>
          <li><Link to="/form">BovImpact</Link></li>
          <li><Link to="/form">BovCrypto</Link></li>
          <li><Link to="/form">Sobre Nós</Link></li>
        </Menu>
      </nav>
      <UserMenu>
        <LoginButton>
          Entrar
        </LoginButton>
      </UserMenu>
    </Container>
  )
}

export default Header
