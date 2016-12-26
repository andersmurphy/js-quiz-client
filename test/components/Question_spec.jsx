import React from 'react'
import {shallow} from 'enzyme'
import {Question} from '../../src/components/Question'
import {expect} from 'chai'
import {Map} from 'immutable'

describe('Question', () => {

  it('renders a question', () => {
    const currentQuestion = Map({
      question: 'question1',
      answers: Map({'answerA': 0,'answerB': 5,'answerC': 10,'answerD': 15})
    })
    const component = shallow(<Question currentQuestion={currentQuestion}/>)

    const headers = component.find('h3')

    expect(headers.length).to.equal(1)
    expect(headers.text()).to.equal('question1')
  })

  it('renders answers', () => {
    const currentQuestion = Map({
      question: 'question1',
      answers: Map({'answerA': 0,'answerB': 5,'answerC': 10,'answerD': 15})
    })
    const component = shallow(<Question currentQuestion={currentQuestion}/>)

    const radioButtons = component.find('label')

    expect(radioButtons.length).to.equal(4)
    expect(radioButtons.at(0).text()).to.equal('answerA')
    expect(radioButtons.at(1).text()).to.equal('answerB')
    expect(radioButtons.at(2).text()).to.equal('answerC')
    expect(radioButtons.at(3).text()).to.equal('answerD')
  })

  it('invokes callback when next radio button is selected', () => {
    let selectedAnswer
    const selectAnswer = (answer) => selectedAnswer = answer
    const currentQuestion = Map({
      question: 'question1',
      answers: Map({'answerA': 0,'answerB': 5,'answerC': 10,'answerD': 15})
    })
    const component = shallow(<Question currentQuestion={currentQuestion}
                                        selectAnswer={selectAnswer}/>)

    const inputs = component.find('input')
    inputs.at(0).simulate('change', { target: {value:'some value'} })

    expect(selectedAnswer).to.equal('answerA')
  })

  it('selectedAnswer radio button is checked', () => {
    const currentQuestion = Map({
      question: 'question1',
      answers: Map({'answerA': 0,'answerB': 5,'answerC': 10,'answerD': 15})
    })
    const component = shallow(<Question currentQuestion={currentQuestion}
                                        selectedAnswer='answerC'/>)

    const inputs = component.find('input')

    expect(inputs.at(0).prop('checked')).to.equal(false)
    expect(inputs.at(1).prop('checked')).to.equal(false)
    expect(inputs.at(2).prop('checked')).to.equal(true)
    expect(inputs.at(3).prop('checked')).to.equal(false)
  })

  it('renders next button', () => {
    const currentQuestion = Map({
      question: 'question1',
      answers: Map({'answerA': 0,'answerB': 5,'answerC': 10,'answerD': 15})
    })
    const component = shallow(<Question currentQuestion={currentQuestion}/>)

    const button = component.find('button')

    expect(button.text()).to.equal('Next')
  })

  it('invokes the next callback when next button is clicked', () => {
    let nextInvoked = false
    const next = () => nextInvoked = true
    const currentQuestion = Map({
      question: 'question1',
      answers: Map({'answerA': 0,'answerB': 5,'answerC': 10,'answerD': 15})
    })
    const component = shallow(<Question currentQuestion={currentQuestion}
                                        next={next}/>)

    component.find('button').simulate('click')

    expect(nextInvoked).to.equal(true)
  })

  it('handles missing props', () => {
    const component = shallow(<Question />)
  })
})
