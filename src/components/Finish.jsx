import React from 'react'

export default class Finish extends React.PureComponent {
  render() {
    return <div className="finish">
      <h1>Thank you john!</h1>
      <h2>You scored {this.props.state.total_score} points out of a possible {this.props.state.max_score} in our cash flow quiz</h2>
      <button ref="next"
              className="next">
              Try Again
      </button>
    </div>
  }
}
