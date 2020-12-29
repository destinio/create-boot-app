import React from 'react'
import { Container, Jumbotron } from 'react-bootstrap'

import '../styles/bootstrap.min.css'

export default function App() {
  return (
    <Jumbotron fluid>
      <Container>
        <h1>Welcome</h1>
        <p>React + Bootstrap</p>
      </Container>
    </Jumbotron>
  )
}
