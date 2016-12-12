import React from 'react'
import {Map} from 'immutable'

export default class Finish extends React.PureComponent {
  getName() {
    return this.props.name ? this.props.name.get('name') : 'No Name'
  }

  getTotalScore() {
    return this.props.totalScore ? this.props.totalScore.get('total_score') : 'No Total Score'
  }

  getMaxScore() {
    return this.props.maxScore ? this.props.maxScore.get('max_score') : 'No Max Score'
  }

  render() {
    return <div className="finish">
      <h1>Thank you {this.getName()}!</h1>
      <p>You scored {this.getTotalScore()} points out of a possible {this.getMaxScore()} in our cash flow quiz</p>
      <button ref="next"
              className="next">
              Try Again
      </button>
    </div>
  }
}
