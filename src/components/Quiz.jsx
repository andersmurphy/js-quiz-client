import React from 'react'
import {connect} from 'react-redux'
import * as actionCreators from '../action_creators'
import Start from './Start'
import Finish from './Finish'
import Question from './Question'

export class Quiz extends React.PureComponent {
  render() {
    if(this.props.name) {
      if(this.props.question) {
        return  <Question ref="question"
          question={this.props.question}
          totalScore={this.props.totalScore}/>
      } else {
        return <Finish ref="finish"
          totalScore={this.props.totalScore}
          maxScore={this.props.maxScore}
          name={this.props.name}/>
      }
    } else {
      return <Start ref="start" />
    }
  }
}

function mapStateToProps(state) {
  return {
    question: state.get('current_question'),
    totalScore: state.get('total_score'),
    maxScore: state.get('max_score'),
    name: state.get('name')
  };
}

export const QuizContainer = connect(
  mapStateToProps,
  actionCreators
)(Quiz)