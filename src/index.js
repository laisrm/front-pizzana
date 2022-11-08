import React from 'react';
import ReactDOM from 'react-dom/client';
import { GlobalStyle } from '../src/Global.styled'
import CssBaseline from '@mui/material/CssBaseline'
import App from './App';
// import Home from './Home';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CssBaseline/>
    <GlobalStyle/>
    {/* <Home/> */}
    <App/>
  </React.StrictMode>,
  document.getElementById('root')
);

