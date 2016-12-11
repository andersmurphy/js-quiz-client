import React from 'react'
import {Map} from 'immutable'

const question = Map({
  question: 'question1',
  answers:  Map({'answerA': 0,'answerB': 5,'answerC': 10,'answerD': 15})
})
const totalScore = Map({
  total_score: 25
})
const maxScore = Map({
  max_score: 100
})
const name = Map({
  name: 'John'
})

export default class App extends React.PureComponent{
  render() {
    return React.cloneElement(this.props.children, {
      question: question,
      maxScore: maxScore,
      totalScore: totalScore,
      name: name
    })
  }
}
