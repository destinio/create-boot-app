import React from 'react'
import { Container, Jumbotron } from 'react-bootstrap'

import 'bootstrap/dist/css/bootstrap.css'

export default function App() {
  return (
    <Jumbotron fluid>
      <Container>
        <h1>Welcome</h1>
        <p>React + Bootstrap</p>
        <h1>{ing}</h1>
      </Container>
    </Jumbotron>
  )
}
