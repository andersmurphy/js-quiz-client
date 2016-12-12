import React from 'react'

export default class Finish extends React.PureComponent {
  render() {
    return <div className="finish">
      <h3>Thank you {this.props.name}!</h3>
      <p>You scored {this.props.totalScore} points out of a possible {this.props.maxScore} in our cash flow quiz</p>
      <button ref="tryAgain"
              className="tryAgain"
              onClick={this.props.tryAgain}>
              Try Again
      </button>
    </div>
  }
}
