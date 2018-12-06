import React from 'react'
import ReactDOM from 'react-dom'
import 'bootstrap/dist/css/bootstrap-reboot.min.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Provider } from 'react-redux'
import { createStore, combineReducers } from 'redux'

import * as reducers from './reducers'

import App from './components/app'

const rootReducer = combineReducers({...reducers})
const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root"));
