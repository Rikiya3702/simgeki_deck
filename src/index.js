import React from 'react';
import ReactDOM from 'react-dom';

import { createStore } from 'redux'
import { Provider } from 'react-redux'

import './index.css';
import reducer from './reducers'

import CssBaseline from '@material-ui/core/CssBaseline'

import App from './components/App'
import * as serviceWorker from './serviceWorker'

const store = createStore(reducer)

ReactDOM.render(
  <Provider store={ store }>
    <CssBaseline />
    <App />
  </Provider>,
   document.getElementById('root')
)

serviceWorker.unregister()
