import React from 'react'


const isNextDisabled = props => {
    return props.name === ''
}

export const Start = props =>
  <div className="start">
    <h3>Welcome to the Cash Flow Quiz!</h3>
    <p>What is your name?</p>
    <input type="text" onChange={(event) => props.setName(event.target.value)}/>
    <div>
      <button className="next"
              disabled={isNextDisabled(props)}
              onClick={props.next}>
              Next
      </button>
    </div>
  </div>
