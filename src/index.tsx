/* eslint-disable react/jsx-no-undef */
import React from 'react';
import ReactDOM from "react-dom";
import './index.css';
import { RecoilRoot } from 'recoil';
import App from './App';

import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import { ThemeProvider } from 'styled-components';
import { theme } from './style';

const client = new QueryClient();


ReactDOM.render(
  <React.StrictMode>
    <RecoilRoot>
      <ThemeProvider theme={theme}>
        <App />

      </ThemeProvider>

    </RecoilRoot>
  </React.StrictMode >,
  document.getElementById("root")
);