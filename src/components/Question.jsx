import React from 'react'

export default class Question extends React.PureComponent {

  render() {
    return <div className="question">
      <h1>{this.props.question.question}</h1>
      <div>
        <input id="answer-1" name="answer" type="radio" value="answerA" />
        <label htmlFor="answer-1">{Object.keys(this.props.question.answers)[0]}</label>
      </div>
      <div>
        <input id="answer-2" name="answer" type="radio" value="answerB" />
        <label htmlFor="answer-2">{Object.keys(this.props.question.answers)[1]}</label>
      </div>
      <div>
        <input id="answer-3" name="answer" type="radio" value="answerC" />
        <label htmlFor="answer-3">{Object.keys(this.props.question.answers)[2]}</label>
      </div>

      <div>
        <input id="answer-4" name="answer" type="radio" value="answerD" />
        <label htmlFor="answer-4">{Object.keys(this.props.question.answers)[3]}</label>
      </div>

      <button ref="next"
              className="next">
              Next
      </button>
    </div>
  }
}
