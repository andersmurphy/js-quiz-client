import React from 'react'
import ReactDOM from 'react-dom'
import {
  renderIntoDocument,
  scryRenderedDOMComponentsWithTag
} from 'react-addons-test-utils'
import Finish from '../../src/components/Finish'
import {expect} from 'chai'

describe('Finish', () => {

  it('renders thank you message', () => {
      const state = {
        total_score: 25,
        max_score: 100
      }
      const component = renderIntoDocument(
        <Finish state={state} />
      )

      const headers = scryRenderedDOMComponentsWithTag(component, 'h1')

      expect(headers.length).to.equal(1)
      expect(headers[0].textContent).to.equal('Thank you john!')
  })

  it('renders overal score', () => {
    const state = {
      total_score: 25,
      max_score: 100
    }
    const component = renderIntoDocument(
      <Finish state={state}/>
    )

    const headers = scryRenderedDOMComponentsWithTag(component, 'h2')

    expect(headers.length).to.equal(1)
    expect(headers[0].textContent).to.equal('You scored 25 points out of a possible 100 in our cash flow quiz')
  })

  it('renders try again', () => {
    const state = {
      total_score: 25,
      max_score: 100
    }
    const component = renderIntoDocument(
      <Finish state={state}/>
    )

    const buttons = scryRenderedDOMComponentsWithTag(component, 'button')

    expect(buttons.length).to.equal(1)
    expect(buttons[0].textContent).to.equal('Try Again')
  })
})