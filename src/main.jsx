import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { MantineProvider } from '@mantine/core'
import { BrowserRouter } from 'react-router-dom'
import '@mantine/core/styles.css'
import myTheme from './styles/GlobalStyles.js'
import SingerContextProvider from './contexts/SingerContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <MantineProvider theme={myTheme}>
        <SingerContextProvider>
          <App />
        </SingerContextProvider>
      </MantineProvider>
    </BrowserRouter>
  </React.StrictMode>
)
