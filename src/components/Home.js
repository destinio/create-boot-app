import React from 'react'
import styled from 'styled-components'
import { FaBootstrap, FaReact } from 'react-icons/fa';
import { SiWebpack, SiJest } from 'react-icons/si';


const StyledMain = styled.main`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  pre {
    background-color: lightgray;
    padding: 8px;
    font-weight: bold;
    border-radius: 4px;
  }
`

const StyledIcons = styled.div`
  font-size: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    margin: 0 8px;
  }
`

export default function Home() {
  return (
    <StyledMain>
      <StyledIcons>
        <FaReact />
        <SiWebpack />
        <SiJest />
        <FaBootstrap />
      </StyledIcons>
      <h1>Welcome</h1>
      <pre>yarn</pre>
      <pre>yarn start</pre>
    </StyledMain>
  )
}
