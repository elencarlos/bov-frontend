import React from 'react'
import { Footer, Header } from './components'
import Routes from './Routes'
import { CheckListState } from './contexts/CheckList/CheckListState'

function App() {
  return (
    <CheckListState>
      <Header />
      <Routes />
      <Footer />
    </CheckListState>
  )
}

export default App
