  import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css';
import { RecoilRoot } from 'recoil';
// 1. import `ChakraProvider` component
import { ChakraProvider } from '@chakra-ui/react'

// 1. import `ChakraProvider` component
import {
  ChakraBaseProvider,
  extendBaseTheme,
  theme as chakraTheme,
} from '@chakra-ui/react'

const { Button } = chakraTheme.components

const theme = extendBaseTheme({
  components: {
    Button,
  },
})

ReactDOM.createRoot(document.getElementById('root')).render(
 <RecoilRoot>

<ChakraProvider theme={theme}>
  <React.StrictMode>
    <App />
  </React.StrictMode>,
</ChakraProvider>
 </RecoilRoot>
  
)