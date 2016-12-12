import React from 'react'
import {Map} from 'immutable'

export default class Score extends React.PureComponent {

  render() {
    return <div className="score">
      <p>Points so far: {this.props.totalScore}</p>
    </div>
  }
}
