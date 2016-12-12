import React from 'react'
import ReactDOM from 'react-dom'
import {
  renderIntoDocument,
  scryRenderedDOMComponentsWithTag,
  Simulate
} from 'react-addons-test-utils'
import Question from '../../src/components/Question'
import {expect} from 'chai'
import {Map} from 'immutable'

describe('Question', () => {

  it('renders a question', () => {
    const currentQuestion = Map({
      question: 'question1',
      answers: Map({'answerA': 0,'answerB': 5,'answerC': 10,'answerD': 15})
    })
    const component = renderIntoDocument(
      <Question currentQuestion={currentQuestion}/>
    )

    const headers = scryRenderedDOMComponentsWithTag(component, 'h3')

    expect(headers.length).to.equal(1)
    expect(headers[0].textContent).to.equal('question1')
  })

  it('renders answers', () => {
    const currentQuestion = Map({
      question: 'question1',
      answers: Map({'answerA': 0,'answerB': 5,'answerC': 10,'answerD': 15})
    })
    const component = renderIntoDocument(
      <Question currentQuestion={currentQuestion}/>
    )

    const radioButtons = scryRenderedDOMComponentsWithTag(component, 'label')

    expect(radioButtons.length).to.equal(4)
    expect(radioButtons[0].textContent).to.equal('answerA')
    expect(radioButtons[1].textContent).to.equal('answerB')
    expect(radioButtons[2].textContent).to.equal('answerC')
    expect(radioButtons[3].textContent).to.equal('answerD')
  })

  it('invokes callback when next radio button is selected', () => {
    let selectedAnswer
    const selectAnswer = (answer) => selectedAnswer = answer
    const currentQuestion = Map({
      question: 'question1',
      answers: Map({'answerA': 0,'answerB': 5,'answerC': 10,'answerD': 15})
    })
    const component = renderIntoDocument(
      <Question currentQuestion={currentQuestion}
                selectAnswer={selectAnswer}/>
    )

    const input = scryRenderedDOMComponentsWithTag(component, 'input')
    Simulate.change(input[0])

    expect(selectedAnswer).to.equal('answerA')
  })

  it('selectedAnswer radio button is checked', () => {
    const currentQuestion = Map({
      question: 'question1',
      answers: Map({'answerA': 0,'answerB': 5,'answerC': 10,'answerD': 15})
    })
    const component = renderIntoDocument(
      <Question currentQuestion={currentQuestion}
                selectedAnswer='answerC'/>
    )

    const input = scryRenderedDOMComponentsWithTag(component, 'input')

    expect(input[0].checked).to.equal(false)
    expect(input[1].checked).to.equal(false)
    expect(input[2].checked).to.equal(true)
    expect(input[3].checked).to.equal(false)
  })

  it('renders next button', () => {
    const currentQuestion = Map({
      question: 'question1',
      answers: Map({'answerA': 0,'answerB': 5,'answerC': 10,'answerD': 15})
    })
    const component = renderIntoDocument(
      <Question currentQuestion={currentQuestion}/>
    )

    const buttons = scryRenderedDOMComponentsWithTag(component, 'button')

    expect(buttons.length).to.equal(1)
    expect(buttons[0].textContent).to.equal('Next')
  })

  it('invokes the next callback when next button is clicked', () => {
    let nextInvoked = false
    const next = () => nextInvoked = true
    const currentQuestion = Map({
      question: 'question1',
      answers: Map({'answerA': 0,'answerB': 5,'answerC': 10,'answerD': 15})
    })
    const component = renderIntoDocument(
      <Question currentQuestion={currentQuestion}
                next={next}/>
    )

    Simulate.click(ReactDOM.findDOMNode(component.refs.next))

    expect(nextInvoked).to.equal(true)
  })

  it('handles missing props', () => {
    const component = renderIntoDocument(
      <Question />
    )
  })
})
