import React from 'react'
import ReactDOM from 'react-dom'
import {Router, Route, hashHistory} from 'react-router'
import {createStore} from 'redux'
import reducer from './reducer'
import {Map, List} from 'immutable'
import {Provider} from 'react-redux'
import io from 'socket.io-client'
import App from './components/App'
import {QuestionContainer} from './components/Question'
import Start from './components/Start'
import Finish from './components/Finish'

const store = createStore(reducer)

const socket = io(`${location.protocol}//${location.hostname}:8090`)
socket.on('state', state =>
  store.dispatch({type: 'SET_STATE', state})
)

const routes = <Route component={App}>
  <Route path="/" component={QuestionContainer} />
  <Route path="quiz" component={Start} />
  <Route path="results" component={Finish} />
</Route>

ReactDOM.render(
  <Provider store={store}>
    <Router history={hashHistory}>{routes}</Router>
  </Provider>,
  document.getElementById('app')
)
