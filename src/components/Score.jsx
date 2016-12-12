import React from 'react'

export default class Score extends React.PureComponent {

  render() {
    return <div className="score">
      <p>Points so far: {this.props.totalScore}</p>
    </div>
  }
}
