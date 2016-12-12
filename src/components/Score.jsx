import React from 'react'
import {Map} from 'immutable'

export default class Score extends React.PureComponent {

  getTotalScore() {
    return this.props.totalScore ? this.props.totalScore.get('total_score') : 'No Total Score'
  }

  render() {
    return <div className="score">
      <p>Points so far: {this.getTotalScore()}</p>
    </div>
  }
}
