import React from 'react'
import ReactDOM from 'react-dom'
import {
  renderIntoDocument,
  scryRenderedDOMComponentsWithTag
} from 'react-addons-test-utils'
import Start from '../../src/components/Start'
import {expect} from 'chai'

describe('Start', () => {

  it('renders quiz title', () => {
      const component = renderIntoDocument(
        <Start />
      )

      const headers = scryRenderedDOMComponentsWithTag(component, 'h1')

      expect(headers.length).to.equal(1)
      expect(headers[0].textContent).to.equal('Welcome to the Cash Flow Quiz!')
  })

  it('renders what is your name?', () => {
      const component = renderIntoDocument(
        <Start />
      )

      const headers = scryRenderedDOMComponentsWithTag(component, 'h2')

      expect(headers.length).to.equal(1)
      expect(headers[0].textContent).to.equal('What is your name?')
  })

  it('renders text field', () => {
    const component = renderIntoDocument(
      <Start />
    )

    const textarea = scryRenderedDOMComponentsWithTag(component, 'textarea')

    expect(textarea.length).to.equal(1)
    expect(textarea[0].textContent).to.equal('')
  })

  it('renders next button', () => {
    const component = renderIntoDocument(
      <Start />
    )

    const buttons = scryRenderedDOMComponentsWithTag(component, 'button')

    expect(buttons.length).to.equal(1)
    expect(buttons[0].textContent).to.equal('Next')
  })

})
