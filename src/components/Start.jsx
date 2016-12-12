import React from 'react'

export default class Start extends React.PureComponent {
  render() {
    return <div className="start">
      <h1>Welcome to the Cash Flow Quiz!</h1>
      <p>What is your name?</p>
      <textarea></textarea>
      <button ref="next"
              className="next"
              onClick={this.props.next}>
              Next
      </button>
    </div>
  }
}
