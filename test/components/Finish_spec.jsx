import React from 'react'
import ReactDOM from 'react-dom'
import {
  renderIntoDocument,
  scryRenderedDOMComponentsWithTag,
  Simulate
} from 'react-addons-test-utils'
import Finish from '../../src/components/Finish'
import {expect} from 'chai'

describe('Finish', () => {

  it('renders thank you message', () => {
    const totalScore = 25
    const maxScore = 100
    const name = 'john'
    const component = renderIntoDocument(
      <Finish totalScore={totalScore}
              maxScore={maxScore}
              name={name}/>
    )

    const headers = scryRenderedDOMComponentsWithTag(component, 'h1')

    expect(headers.length).to.equal(1)
    expect(headers[0].textContent).to.equal('Thank you john!')
  })

  it('renders overal score', () => {
    const totalScore = 25
    const maxScore = 100
    const name = 'john'
    const component = renderIntoDocument(
      <Finish totalScore={totalScore}
              maxScore={maxScore}
              name={name}/>
    )

    const paragraphs = scryRenderedDOMComponentsWithTag(component, 'p')

    expect(paragraphs.length).to.equal(1)
    expect(paragraphs[0].textContent).to.equal('You scored 25 points out of a possible 100 in our cash flow quiz')
  })

  it('renders try again', () => {
    const totalScore = 25
    const maxScore = 100
    const name = 'john'
    const component = renderIntoDocument(
      <Finish totalScore={totalScore}
              maxScore={maxScore}
              name={name}/>
    )

    const buttons = scryRenderedDOMComponentsWithTag(component, 'button')

    expect(buttons.length).to.equal(1)
    expect(buttons[0].textContent).to.equal('Try Again')
  })

  it('handles missing props', () => {
    const component = renderIntoDocument(
      <Finish />
    )
  })

  it('invokes the tryAgain callback when tryAgain button is clicked', () => {
    let tryAgainInvoked = false
    const tryAgain = () => tryAgainInvoked = true
    const component = renderIntoDocument(
      <Finish tryAgain={tryAgain}/>
    )

    Simulate.click(ReactDOM.findDOMNode(component.refs.tryAgain))

    expect(tryAgainInvoked).to.equal(true)
  })

})
