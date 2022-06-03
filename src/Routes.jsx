import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Detail, Form, Home } from './pages'

export default function Routes() {
  return (

      <Switch>
        <Route path="/home" component={Home} />
        <Route path="/detail/:id?" component={Detail} />
        <Route path="/form/:id?" component={Form} />
        <Route path="/">
          <Home />
        </Route>
      </Switch>
  )
}
