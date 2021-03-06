import React from 'react'
import ReactDOM from 'react-dom'
import 'bootstrap/dist/css/bootstrap-reboot.min.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Provider } from 'react-redux'
import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import { composeWithDevTools } from "redux-devtools-extension/developmentOnly"
import { connectRoutes } from 'redux-first-router'
import thunkMiddleware from 'redux-thunk'
import createHashHistory from 'history/createHashHistory'

import * as reducers from './reducers'
import routesMap from './routesMap'
import App from './components/app'

const { reducer, middleware, enhancer, thunk } = connectRoutes(routesMap, { createHistory: createHashHistory })

const rootReducer = combineReducers({...reducers, location: reducer})
const middlewares = composeWithDevTools(applyMiddleware(middleware, thunkMiddleware))
const enhancers = compose(
  enhancer,
  middlewares
)

const store = createStore(rootReducer, enhancers)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root"));
