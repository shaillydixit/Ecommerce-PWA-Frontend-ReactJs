import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../src/assets/css/fontawesome.css';
import '../src/assets/css/custom.css';
import axios from 'axios';

axios.defaults.headers.common['Authorization'] =
  'Bearer ' + localStorage.getItem('token');

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
