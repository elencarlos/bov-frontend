import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { CheckListForm, Detail, Home } from './pages'

export default function Routes() {
  return (
    <Switch>
      <Route path="/home" component={Home} />
      <Route path="/detail/:id?" component={Detail} />
      <Route path="/form/:id?" component={CheckListForm} />
      <Route path="/">
        <Home />
      </Route>
    </Switch>
  )
}
