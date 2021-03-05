import React from 'react'
import { Switch, Route } from 'react-router-dom'

import GlobalStyle from '../styles/styles'

import About from './About'
import Home from './Home'

export default function App() {
  return (
    <>
      <GlobalStyle />
      <Switch>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </>
  )
}
