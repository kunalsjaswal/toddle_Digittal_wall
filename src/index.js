import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { HashRouter } from 'react-router-dom';
import StatesStore from './context/statesFile';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <StatesStore>
    <HashRouter>
      <App />
    </HashRouter>
  </StatesStore>
);
