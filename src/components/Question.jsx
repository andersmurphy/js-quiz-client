import React from 'react'

export default class Question extends React.PureComponent {

  render() {
    return <div className="question">
      <h1>{this.props.question.question}</h1>
      <form>
        <div className="radio">
          <label>
            <input type="radio" value="answerA" checked={true} />
            {Object.keys(this.props.question.answers)[0]}
          </label>
        </div>
        <div className="radio">
          <label>
            <input type="radio" value="answerB" />
            {Object.keys(this.props.question.answers)[1]}
          </label>
        </div>
        <div className="radio">
          <label>
            <input type="radio" value="answerC" />
            {Object.keys(this.props.question.answers)[2]}
          </label>
        </div>
        <div className="radio">
          <label>
            <input type="radio" value="answerD" />
            {Object.keys(this.props.question.answers)[3]}
          </label>
        </div>
      </form>
      <button ref="next"
              className="next">
              Next
      </button>
    </div>
  }
}
