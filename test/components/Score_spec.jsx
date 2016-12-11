import React from 'react'
import ReactDOM from 'react-dom'
import {
  renderIntoDocument,
  scryRenderedDOMComponentsWithTag
} from 'react-addons-test-utils'
import Score from '../../src/components/Score'
import {expect} from 'chai'
import {Map} from 'immutable'


describe('Score', () => {

  it('renders score', () => {
    const score = Map({total_score: 25})
    const component = renderIntoDocument(
      <Score score={score} />
    )

    const headers = scryRenderedDOMComponentsWithTag(component, 'h1')

    expect(headers.length).to.equal(1)
    expect(headers[0].textContent).to.equal('Points so far: 25')
  })

})
