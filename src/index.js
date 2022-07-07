import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux'
import creatingStore from './features/store';

const store = creatingStore()
console.log(store.getState())
store.subscribe(() => console.log(store.getState()))

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
