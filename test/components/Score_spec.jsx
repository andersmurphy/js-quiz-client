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
    const totalScore = Map({total_score: 25})
    const component = renderIntoDocument(
      <Score totalScore={totalScore} />
    )

    const headers = scryRenderedDOMComponentsWithTag(component, 'p')

    expect(headers.length).to.equal(1)
    expect(headers[0].textContent).to.equal('Points so far: 25')
  })

  it('handles missing props', () => {
    const component = renderIntoDocument(
      <Score />
    )
  })

})
