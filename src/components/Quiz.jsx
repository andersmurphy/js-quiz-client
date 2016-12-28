import React from 'react'
import {connect} from 'react-redux'
import * as actionCreators from '../action_creators'
import {Start} from './Start'
import {Finish} from './Finish'
import {Question} from './Question'

const finishContainer = props =>
  <Finish
    totalScore={props.totalScore}
    maxScore={props.maxScore}
    name={props.name}
    tryAgain={props.tryAgain}
  />

const questionContainer = props =>
  <Question
    currentQuestion={props.currentQuestion}
    totalScore={props.totalScore}
    next={props.next}
    selectAnswer={props.selectAnswer}
    selectedAnswer={props.selectedAnswer}
  />

const startContainer = props =>
  <Start
    next={props.next}
    setName={props.setName}
    name={props.name}
  />

const isPresentAndEmpty = collection => collection && collection.isEmpty()

const isPresentAndNotEmpty = collection => collection && !collection.isEmpty()

export const Quiz = props =>
  isPresentAndEmpty(props.questions) && isPresentAndEmpty(props.currentQuestion) ? finishContainer(props)
  : isPresentAndNotEmpty(props.currentQuestion) ? questionContainer(props)
  : startContainer(props)


function mapStateToProps(state) {
  return {
    questions: state.get('questions'),
    currentQuestion: state.get('current_question'),
    totalScore: state.get('total_score'),
    maxScore: state.get('max_score'),
    name: state.get('name'),
    selectedAnswer: state.getIn(['current_question', 'selected_answer'])
  }
}

export const QuizContainer = connect(
  mapStateToProps,
  actionCreators
)(Quiz)
