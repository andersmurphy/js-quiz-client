import React from 'react'

export const Finish = props =>
  <div className="finish">
    <h3>Thank you {props.name}!</h3>
    <p>You scored {props.totalScore} points out of a possible {props.maxScore} in our cash flow quiz</p>
    <button className="tryAgain"
            onClick={props.tryAgain}>
            Try Again
    </button>
  </div>
