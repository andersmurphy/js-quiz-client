import React from 'react'
import ReactDOM from 'react-dom'
import {
  renderIntoDocument,
  scryRenderedDOMComponentsWithTag,
  Simulate
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

      const paragraphs = scryRenderedDOMComponentsWithTag(component, 'p')

      expect(paragraphs.length).to.equal(1)
      expect(paragraphs[0].textContent).to.equal('What is your name?')
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

  it('invokes the next callback when next button is clicked', () => {
    let nextInvoked = false
    const next = () => nextInvoked = true
    const component = renderIntoDocument(
      <Start next={next}/>
    )

    Simulate.click(ReactDOM.findDOMNode(component.refs.next))

    expect(nextInvoked).to.equal(true)
  })

})
