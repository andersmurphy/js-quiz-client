import React from 'react'
import {Map} from 'immutable'

const question = Map({
  question: 'question1',
  answers:  Map({'answerA': 0,'answerB': 5,'answerC': 10,'answerD': 15})
})

export default class App extends React.PureComponent{
  render() {
    return React.cloneElement(this.props.children, {question: question});
  }
}
