import React from 'react'

export default class Score extends React.PureComponent {
  render() {
    return <div className="score">
      <h1>Points so far: {this.props.score.get('total_score')}</h1>
    </div>
  }
}
