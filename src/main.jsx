import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { Provider } from 'react-redux';
import { ThemeProvider } from "@mui/material";
import store from './app/store';
import themeSystem from './shared/themes';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={themeSystem}>
        <App />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>,
)
