import React from 'react'
import styled from 'styled-components'
import { FaBootstrap, FaReact } from 'react-icons/fa'
import { SiWebpack, SiJest, SiTypescript} from 'react-icons/si'

const StyledMain = styled.main`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: center;

  pre {
    background-color: #e8e2f3;
    border-radius: 4px;
    font-weight: bold;
    padding: 8px;
  }
`

const StyledIcons = styled.div`
  align-items: center;
  display: flex;
  font-size: 3rem;
  justify-content: center;

  svg {
    margin: 0 8px;
  }
`

export default function Home() {
  return (
    <StyledMain>
      <StyledIcons>
        <FaReact />
        <SiTypescript />
        <SiWebpack />
        <SiJest />
      </StyledIcons>
      <pre>yarn</pre>
      <pre>yarn start</pre>
    </StyledMain>
  )
}
