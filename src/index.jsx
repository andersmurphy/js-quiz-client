import React from 'react'
import ReactDOM from 'react-dom'
import {Router, Route, hashHistory} from 'react-router'
import App from './components/App'
import Question from './components/Question'
import Start from './components/Start'
import Finish from './components/Finish'

const routes = <Route component={App}>
  <Route path="/" component={Question} />
  <Route path="quiz" component={Start} />
  <Route path="results" component={Finish} />
</Route>

ReactDOM.render(
  <Router history={hashHistory}>{routes}</Router>,
  document.getElementById('app')
)
