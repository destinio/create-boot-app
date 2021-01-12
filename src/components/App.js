import React from 'react'
import { Switch, Route } from 'react-router-dom'

import GlobalStyle from '../styles/styles'

import About from './About'
import Home from './Home'

// If you would like to use bootstrap uncomment below
// import '../styles/bootstrap.min.css'

export default function App() {
  return (
    <>
      <GlobalStyle />
      <h1>Welcome</h1>
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
