import React from 'react'
import ReactDOM from 'react-dom'
import {
  renderIntoDocument,
  scryRenderedDOMComponentsWithTag
} from 'react-addons-test-utils'
import Finish from '../../src/components/Finish'
import {expect} from 'chai'
import {Map} from 'immutable'


describe('Finish', () => {

  it('renders thank you message', () => {
    const totalScore = Map({total_score: 25})
    const maxScore = Map({max_score: 100})
    const component = renderIntoDocument(
      <Finish totalScore={totalScore}
              maxScore={maxScore}/>
    )

    const headers = scryRenderedDOMComponentsWithTag(component, 'h1')

    expect(headers.length).to.equal(1)
    expect(headers[0].textContent).to.equal('Thank you john!')
  })

  it('renders overal score', () => {
    const totalScore = Map({total_score: 25})
    const maxScore = Map({max_score: 100})
    const component = renderIntoDocument(
      <Finish totalScore={totalScore}
              maxScore={maxScore}/>
    )

    const paragraphs = scryRenderedDOMComponentsWithTag(component, 'p')

    expect(paragraphs.length).to.equal(1)
    expect(paragraphs[0].textContent).to.equal('You scored 25 points out of a possible 100 in our cash flow quiz')
  })

  it('renders try again', () => {
    const totalScore = Map({total_score: 25})
    const maxScore = Map({max_score: 100})
    const component = renderIntoDocument(
      <Finish totalScore={totalScore}
              maxScore={maxScore}/>
    )

    const buttons = scryRenderedDOMComponentsWithTag(component, 'button')

    expect(buttons.length).to.equal(1)
    expect(buttons[0].textContent).to.equal('Try Again')
  })
})
