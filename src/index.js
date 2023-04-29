import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import './styles/medium.css';
import './styles/mobile.css';
import './styles/small.css';
import './styles/typical.css';
import './styles/tiny.css';
import App from './components/App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
, document.getElementById('root'));
