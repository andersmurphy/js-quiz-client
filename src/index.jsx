import React from 'react'
import ReactDOM from 'react-dom'
import {Router, Route, hashHistory} from 'react-router'
import {createStore, applyMiddleware} from 'redux'
import reducer from './reducer'
import {Map, List} from 'immutable'
import {Provider} from 'react-redux'
import io from 'socket.io-client'
import App from './components/App'
import {QuizContainer} from './components/Quiz'
import Start from './components/Start'
import Finish from './components/Finish'
import {setState} from './action_creators'
import remoteActionMiddleware from './remote_action_middleware'

const socket = io(`${location.protocol}//${location.hostname}:8090`)
socket.on('state', state =>
  store.dispatch(setState(state))
)

const createStoreWithMiddleware = applyMiddleware(
  remoteActionMiddleware(socket)
)(createStore)
const store = createStoreWithMiddleware(reducer)

const routes = <Route component={App}>
  <Route path="/" component={QuizContainer} />
</Route>

ReactDOM.render(
  <Provider store={store}>
    <Router history={hashHistory}>{routes}</Router>
  </Provider>,
  document.getElementById('app')
)
