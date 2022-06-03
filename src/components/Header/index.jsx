import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/bov-platform.svg'
import {
  Container, Logo, UserMenu, LoginButton, Menu,
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
          <li><Link to="/detail">Detail</Link></li>
          <li><Link to="/form">Form</Link></li>
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
