import React from 'react'
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components'
import Operators from './components/Operators'
import Tasks from './components/Tasks'
import OperatorsContainer from './components/Operators-styles'
import './opArray.js'
import colors from './colors'



const GlobalStyle=createGlobalStyle`
  body{
    font-family: 'Roboto', sans-serif;
  }
`

const MainContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin: 5px;
`


const App = () => {
  return (
    <>
      <ThemeProvider theme={colors}>
        <GlobalStyle/>
        <MainContainer>
          <Tasks/>
          <OperatorsContainer>
            <Operators elements={{img:true,name:true,time:true}}/>
          </OperatorsContainer>
        </MainContainer>
      </ThemeProvider>
    </>
  )
}

export default App

