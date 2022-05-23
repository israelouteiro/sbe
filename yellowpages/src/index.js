import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'ui/theme.css';
import Home from 'screens/Home';
import reportWebVitals from './reportWebVitals';

import { CoreState } from 'context/CoreContext' 
import { ThemeCore } from 'ui/theme';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CoreState>
        <Home /> 
        <ThemeCore />
    </CoreState>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
