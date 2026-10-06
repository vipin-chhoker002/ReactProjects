import { BrowserRouter } from 'react-router-dom'
import { createRoot } from 'react-dom/client'
// import store from '../src/store/Store'
import { Provider } from 'react-redux';
import { StrictMode } from 'react';
import './index.css'
import App from './App.jsx'
import { store } from './store/Store';

createRoot(document.getElementById('root')).render(



  <BrowserRouter>
    <Provider store={store}>

      <App />
    </Provider>
  </BrowserRouter>


)
