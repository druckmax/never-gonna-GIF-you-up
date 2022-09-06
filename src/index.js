import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import MainContext from './context/context';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <MainContext>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </MainContext>
);
