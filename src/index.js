import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import './index.css';
import CreateStoreWithMiddleware from "../src/config/CreateStoreWithMiddleware";
import Routes from "./config/Routes";
import registerServiceWorker from './registerServiceWorker';

const store = CreateStoreWithMiddleware();

ReactDOM.render(
  <Provider store={store}>
    <Routes />
  </Provider>,  
  document.getElementById('root'));
registerServiceWorker();
