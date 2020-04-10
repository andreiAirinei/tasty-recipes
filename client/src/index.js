import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import 'bootswatch/dist/minty/bootstrap.min.css';
import './styles/app.scss';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
