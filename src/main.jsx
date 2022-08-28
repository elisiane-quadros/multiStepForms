import { ChakraProvider } from "@chakra-ui/react"
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { theme } from './styles/theme'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode theme={theme}>
    <ChakraProvider>
    <App />
    </ChakraProvider>
  </React.StrictMode>
)
