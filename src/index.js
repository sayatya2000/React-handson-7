import React from 'react';
import ReactDOM from 'react-dom/client';
// import './index.css';
import App from './App';
import Store from './Component/Store/Store';
import {BrowserRouter} from 'react-router-dom';
import { Provider } from 'react-redux';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Provider store={Store}>
      <App/>
    </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
reportWebVitals();
