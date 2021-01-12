import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/app';

import PRODUCTS from './mock/products';

ReactDOM.render(
  <App products={PRODUCTS}  />,
  document.getElementById('root')
);
