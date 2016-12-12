import React from 'react'
import {connect} from 'react-redux'
import * as actionCreators from '../action_creators'
import Start from './Start'
import Finish from './Finish'
import Question from './Question'

export class Quiz extends React.PureComponent {
  render() {
    if(this.props.questions && !this.props.questions.isEmpty()) {
      if(this.props.currentQuestion && this.props.name) {
        return  <Question ref="question"
          currentQuestion={this.props.currentQuestion}
          totalScore={this.props.totalScore}
          next={this.props.next}/>
      } else {
        return <Start ref="start"
          next={this.props.next}
          setName={this.props.setName}/>
      }
    } else {
      return <Finish ref="finish"
        totalScore={this.props.totalScore}
        maxScore={this.props.maxScore}
        name={this.props.name}/>
    }
  }
}

function mapStateToProps(state) {
  return {
    questions: state.get('questions'),
    currentQuestion: state.get('current_question'),
    totalScore: state.get('total_score'),
    maxScore: state.get('max_score'),
    name: state.get('name')
  };
}

export const QuizContainer = connect(
  mapStateToProps,
  actionCreators
)(Quiz)
