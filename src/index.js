import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';

import App from './components/app';
import ErrorBoundry from './components/error-boundry';
import { ProductsServiceProvider } from './components/products-service-context';
import ProductsService from './service/products-service';

import './index.scss';

const productsService = new ProductsService();

ReactDOM.render(
  <Provider store={store}>
    <ErrorBoundry>
      <ProductsServiceProvider value={productsService}>
        <App />
      </ProductsServiceProvider>
    </ErrorBoundry>
  </Provider>,
  document.getElementById('root')
);
