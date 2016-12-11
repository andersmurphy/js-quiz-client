import React from 'react'
import ReactDOM from 'react-dom'
import {
  renderIntoDocument,
  scryRenderedDOMComponentsWithTag,
  Simulate
} from 'react-addons-test-utils'
import Question from '../../src/components/Question'
import {expect} from 'chai'

describe('Question', () => {

  it('renders a question', () => {
    const question = {
      question: 'question1',
      answers: {'answerA': 0,'answerB': 5,'answerC': 10,'answerD': 15}
    }
    const component = renderIntoDocument(
      <Question question={question} />
    )

    const headers = scryRenderedDOMComponentsWithTag(component, 'h1')

    expect(headers.length).to.equal(1)
    expect(headers[0].textContent).to.equal('question1')
  })

  it('renders answers', () => {
    const question = {
      question: 'question1',
      answers: {'answerA': 0,'answerB': 5,'answerC': 10,'answerD': 15}
    }
    const component = renderIntoDocument(
      <Question question={question} />
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
    const question = {
      question: 'question1',
      answers: {'answerA': 0,'answerB': 5,'answerC': 10,'answerD': 15}
    }
    const component = renderIntoDocument(
      <Question question={question}
                selectAnswer={selectAnswer}/>
    )

    const input = scryRenderedDOMComponentsWithTag(component, 'input')
    Simulate.change(input[0])

    expect(selectedAnswer).to.equal('answerA')
  })

  it('selectedAnswer radio button is checked', () => {
    const question = {
      question: 'question1',
      answers: {'answerA': 0,'answerB': 5,'answerC': 10,'answerD': 15}
    }
    const component = renderIntoDocument(
      <Question question={question}
                selectedAnswer='answerC'/>
    )

    const input = scryRenderedDOMComponentsWithTag(component, 'input')

    expect(input[0].checked).to.equal(false)
    expect(input[1].checked).to.equal(false)
    expect(input[2].checked).to.equal(true)
    expect(input[3].checked).to.equal(false)
  })

  it('renders next button', () => {
    const question = {
      question: 'question1',
      answers: {'answerA': 0,'answerB': 5,'answerC': 10,'answerD': 15}
    }
    const component = renderIntoDocument(
      <Question question={question} />
    )

    const buttons = scryRenderedDOMComponentsWithTag(component, 'button')

    expect(buttons.length).to.equal(1)
    expect(buttons[0].textContent).to.equal('Next')
  })

})
