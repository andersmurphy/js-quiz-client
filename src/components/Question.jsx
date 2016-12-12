import React from 'react'
import {Map, List} from 'immutable'
import Finish from './Finish'
import Score from './Score'

export default class Question extends React.PureComponent {
  getAnswers() {
    return ((this.props.question && this.props.question.get('answers'))
            || List())
            .keySeq()
  }

  render() {
    return this.getAnswers().isEmpty() ?
    <Finish ref="finish"
      totalScore={this.props.totalScore}
      maxScore={this.props.maxScore}
      name={this.props.name}/> :
    <div className="question">
      <Score totalScore={this.props.totalScore}/>
      <h1>{this.props.question.get('question')}</h1>
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
