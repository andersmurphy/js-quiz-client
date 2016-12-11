import React from 'react'

export default class Finish extends React.PureComponent {
  render() {
    return <div className="finish">
      <h1>Thank you john!</h1>
      <p>You scored {this.props.totalScore} points out of a possible {this.props.maxScore} in our cash flow quiz</p>
      <button ref="next"
              className="next">
              Try Again
      </button>
    </div>
  }
}
