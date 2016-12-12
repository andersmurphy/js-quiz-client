import React from 'react'
import ReactDOM from 'react-dom'
import {Router, Route, hashHistory} from 'react-router'
import {createStore} from 'redux'
import reducer from './reducer'
import {Map, List} from 'immutable'
import {Provider} from 'react-redux'
import App from './components/App'
import {QuestionContainer} from './components/Question'
import Start from './components/Start'
import Finish from './components/Finish'

const store = createStore(reducer)
store.dispatch({
  type: 'SET_STATE',
  state: Map({
    questions: List.of(Map({
          question: 'question2',
          answers: Map({'answerA': 0,'answerB': 5,'answerC': 10,'answerD': 15})
        }),
        Map({
          question: 'question3',
          answers: Map({'answerA': 0,'answerB': 5,'answerC': 10,'answerD': 15})
        })),
    current_question: Map({
        question: 'question1',
        answers: Map({'answerA': 0,'answerB': 5,'answerC': 10,'answerD': 15}),
        selected_answer: 'answerC'
      }),
    name: 'John',
    total_score: 25,
    max_score: 100
    })
  })

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
