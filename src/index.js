import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App';
import { Provider } from 'react-redux';
import { configureStore } from './store';

const store = configureStore();
console.log('store in index.js',store)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <Provider store ={store}>
  <React.StrictMode>
    <App subscribe={store.subscribe} />
  </React.StrictMode>
 </Provider>
);
