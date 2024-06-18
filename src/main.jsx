//import React from 'react'
import ReactDOM from 'react-dom/client'
import { Routes } from './routes'
import { GlobalProvider } from './context/GlobalContext'
import { AuthProvider } from './context/AuthContext'
import { ColorProvider } from './context/ColorContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  <GlobalProvider>
    <ColorProvider>
      <AuthProvider>
        <Routes />
      </AuthProvider>
    </ColorProvider>
  </GlobalProvider>
)
