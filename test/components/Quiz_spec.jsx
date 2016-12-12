import React from 'react'
import ReactDOM from 'react-dom'
import {
  renderIntoDocument,
  scryRenderedDOMComponentsWithTag
} from 'react-addons-test-utils'
import {Quiz} from '../../src/components/Quiz'
import {expect} from 'chai'
import {Map} from 'immutable'

describe('Quiz', () => {


    it('renders start component when there is no name set', () => {
      const component = renderIntoDocument(
        <Quiz />
      )

      const startComponent = ReactDOM.findDOMNode(component.refs.start)
      expect(startComponent).to.be.ok
      expect(startComponent.textContent).to.contain('Welcome to the Cash Flow Quiz!')
      expect(startComponent.textContent).to.contain('What is your name?')
    })

    it('renders question component when name is set and questions are there', () => {
      const question = Map({
        question: 'question1',
        answers: Map({'answerA': 0,'answerB': 5,'answerC': 10,'answerD': 15})
      })
      const totalScore = 25
      const maxScore = 100
      const name = 'john'
      const component = renderIntoDocument(
        <Quiz question={question}
                  totalScore={totalScore}
                  maxScore={maxScore}
                  name={name}/>
      )

      const questionComponent = ReactDOM.findDOMNode(component.refs.question)
      expect(questionComponent).to.be.ok
    })

    it('renders finish component when there are no more questions left', () => {
      const totalScore = 25
      const maxScore = 100
      const name = 'john'
      const component = renderIntoDocument(
        <Quiz totalScore={totalScore}
                  maxScore={maxScore}
                  name={name}/>
      )

      const finishComponent = ReactDOM.findDOMNode(component.refs.finish)
      expect(finishComponent).to.be.ok;
      expect(finishComponent.textContent).to.contain('john')
      expect(finishComponent.textContent).to.contain('100')
      expect(finishComponent.textContent).to.contain('25')
    })

    it('handles missing props', () => {
      const component = renderIntoDocument(
        <Quiz />
      )
    })

})
