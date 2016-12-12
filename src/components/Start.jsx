import React from 'react'

export default class Start extends React.PureComponent {

  isNextDisabled() {
    return this.props.name === ''
  }

  render() {
    return <div className="start">
      <h3>Welcome to the Cash Flow Quiz!</h3>
      <p>What is your name?</p>
      <input ref="setName" type="text" onChange={(event) => this.props.setName(event.target.value)}/>
      <div>
        <button ref="next"
                className="next"
                disabled={this.isNextDisabled()}
                onClick={this.props.next}>
                Next
        </button>
      </div>
    </div>
  }
}
