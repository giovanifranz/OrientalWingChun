import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ChakraProvider } from '@chakra-ui/react'
import { theme } from './styles/theme';
import Fonts from './styles/Fonts';

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <Fonts />
      <App />
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById('root')
);