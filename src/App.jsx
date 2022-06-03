import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Footer, Header } from './components'
import { Detail, Form, Home } from './pages'

function App() {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route path="/home" component={Home} />
          <Route path="/detail/:id?" component={Detail} />
          <Route path="/form/:id?" component={Form} />
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
      <Footer />
    </>
  )
}

export default App
