  import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css';
import { RecoilRoot } from 'recoil';
// 1. import `ChakraProvider` component
import { ChakraProvider } from '@chakra-ui/react'
import { BrowserRouter } from 'react-router-dom';

// 1. import `ChakraProvider` component
import {
  ChakraBaseProvider,
  extendBaseTheme,
  theme as chakraTheme,
} from '@chakra-ui/react'

const { Button } = chakraTheme.components

const theme = extendBaseTheme({
  extend:{
    colors: {
      'custom-blue': 'rgb(30, 69, 114)',
    },

  }
})

ReactDOM.createRoot(document.getElementById('root')).render(

 <RecoilRoot>
<BrowserRouter>
<ChakraProvider theme={theme}>
    <App />
</ChakraProvider>
</BrowserRouter>
 </RecoilRoot>
  
)