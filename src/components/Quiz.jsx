import React from 'react'
import {connect} from 'react-redux'
import * as actionCreators from '../action_creators'
import {Start} from './Start'
import {Finish} from './Finish'
import {Question} from './Question'

export const Quiz = props => {
  if(props.questions && props.questions.isEmpty()
      &&props.currentQuestion && props.currentQuestion.isEmpty()) {
    return <Finish
      totalScore={props.totalScore}
      maxScore={props.maxScore}
      name={props.name}
      tryAgain={props.tryAgain}/>
  } else if(props.currentQuestion && !props.currentQuestion.isEmpty()) {
    return  <Question
      currentQuestion={props.currentQuestion}
      totalScore={props.totalScore}
      next={props.next}
      selectAnswer={props.selectAnswer}
      selectedAnswer={props.selectedAnswer}/>
  } else {
    return <Start
      next={props.next}
      setName={props.setName}
      name={props.name}/>
  }
}

function mapStateToProps(state) {
  return {
    questions: state.get('questions'),
    currentQuestion: state.get('current_question'),
    totalScore: state.get('total_score'),
    maxScore: state.get('max_score'),
    name: state.get('name'),
    selectedAnswer: state.getIn(['current_question', 'selected_answer'])
  };
}

export const QuizContainer = connect(
  mapStateToProps,
  actionCreators
)(Quiz)
