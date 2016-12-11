import React from 'react'
import {Map} from 'immutable'

export default class Question extends React.PureComponent {
  getAnswers() {
    return this.props.question.get('answers').keySeq() || []
  }

  render() {
    return <div className="question">
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
              className="next">
              Next
      </button>
    </div>
  }
}
