//import React from 'react'
import ReactDOM from 'react-dom/client'
import { ThemeProvider } from 'styled-components'
import GlobalStyle from './styles/global'
import { lightTheme, darkTheme } from './styles/themes'
import { Routes } from './routes'
import { useContext } from 'react'
import { GlobalContext, GlobalProvider } from './context/GlobalContext'

function Main(){
  const { colorTheme } = useContext(GlobalContext)

  const theme = colorTheme === 'light' ? lightTheme : darkTheme

  return(
    <ThemeProvider theme={theme}>
      <GlobalStyle />
        <Routes />
    </ThemeProvider>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <GlobalProvider>
    <Main />
  </GlobalProvider>
)
