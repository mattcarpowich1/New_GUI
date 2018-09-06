import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, combineReducers } from 'redux'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import thunk from 'redux-thunk'
import { User } from './reducers'
import './index.css'
import App from './App'

const rootReducer = combineReducers({
  User
})

const cueStore = createStore(
  rootReducer,
  applyMiddleware(thunk)
)

ReactDOM.render(
  <Provider store={cueStore}>
    <App />
  </Provider>,
  document.getElementById('root')
)
