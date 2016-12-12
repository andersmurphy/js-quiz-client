import React from 'react'
import {Map, List} from 'immutable'
import Score from './Score'

export default class Question extends React.PureComponent {
  getAnswers() {
    return ((this.props.currentQuestion && this.props.currentQuestion.get('answers'))
            || List())
            .keySeq()
  }

  getQuestion() {
    return ((this.props.currentQuestion && this.props.currentQuestion.get('question'))
            || '')
  }

  render() {
    return <div className="question">
      <Score totalScore={this.props.totalScore}/>
      <h3>{this.getQuestion()}</h3>
      {this.getAnswers().map(answer =>
        <div className="radio" key={answer}>
          <input type="radio" value={answer}
            onChange={() => this.props.selectAnswer(answer)}
            checked={this.props.selectedAnswer === answer ? true : false}/>
          <label htmlFor={answer}>{answer}</label>
        </div>
      )}
      <button ref="next"
              className="next"
              onClick={this.props.next}>
              Next
      </button>
    </div>
  }
}
