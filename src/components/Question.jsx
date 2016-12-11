import React from 'react'

export default class Question extends React.PureComponent {
  getAnswers() {
    return Object.keys(this.props.question.answers) || []
  }

  render() {
    return <div className="question">
      <h1>{this.props.question.question}</h1>
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
