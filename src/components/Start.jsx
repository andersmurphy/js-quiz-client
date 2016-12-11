import React from 'react'

export default class Start extends React.PureComponent {
  render() {
    return <div className="start">
      <h1>Welcome to the Cash Flow Quiz!</h1>
      <h2>What is your name?</h2>
      <textarea></textarea>
      <button ref="next"
              className="next">
              Next
      </button>
    </div>
  }
}
