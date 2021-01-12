import React from 'react'
import { Switch, Route, Link } from 'react-router-dom'

import GlobalStyle from '../styles/styles'

// If you would like to use bootstrap uncomment below
// import '../styles/bootstrap.min.css'

function About() {
  return <h1>About</h1>
}

function Home() {
  return <h1>Home</h1>
}

function Nav() {
  return (
    <div>
      <Link to="/about">about</Link>
      <Link to="/">home</Link>
    </div>
  )
}

export default function App() {
  return (
    <>
      <GlobalStyle />
      <h1>Welcome</h1>
      <Nav />
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
