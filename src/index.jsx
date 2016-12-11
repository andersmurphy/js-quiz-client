import React from 'react'
import ReactDOM from 'react-dom'
import Question from './components/Question'
import {Map} from 'immutable'


const question = {
  question: 'question1',
  answers: {'answerA': 0,'answerB': 5,'answerC': 10,'answerD': 15}
}

ReactDOM.render(
  <Question question={question} />,
  document.getElementById('app')
)
