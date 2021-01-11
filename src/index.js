import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/app';

import PRODUCTS from './mock/products';

ReactDOM.render(
  <React.StrictMode>
    <App products={PRODUCTS}  />
  </React.StrictMode>,
  document.getElementById('root')
);
