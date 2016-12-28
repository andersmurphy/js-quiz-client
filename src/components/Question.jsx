import React from 'react'
import {Map, List} from 'immutable'
import {Score} from './Score'


const getAnswers = props =>
  (props.currentQuestion ? props.currentQuestion.get('answers') : List()).keySeq()

const getQuestion = props =>
  props.currentQuestion ? props.currentQuestion.get('question') : ''

export const Question = props =>
  <div className="question">
    <Score totalScore={props.totalScore}/>
    <h3>{getQuestion(props)}</h3>
    {getAnswers(props).map(answer =>
      <div className="radio" key={answer}>
        <input type="radio" value={answer}
          onChange={() => props.selectAnswer(answer)}
          checked={props.selectedAnswer === answer ? true : false}/>
        <label htmlFor={answer}>{answer}</label>
      </div>
    )}
    <button className="next"
            onClick={props.next}>
            Next
    </button>
  </div>
