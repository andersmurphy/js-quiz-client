import React from 'react'
import {shallow} from 'enzyme'
import {expect} from 'chai'
import {Score} from '../../src/components/Score'

describe('Score', () => {
  let component

  beforeEach(() => {
    component = shallow(<Score totalScore={25} />)
  })

  it('renders components', () => {
    expect(component).to.exist
  })

  it('displays the score in a paragraph wrapped in a div', () => {
    expect(component.type()).to.equal('div')
    expect(component.hasClass('score'))

    const paragraph = component.childAt(0)
    expect(paragraph.type()).to.equal('p')
    expect(paragraph.text()).to.equal('Points so far: 25')
  })

  it('handles missing props', () => {
    const component = shallow(<Score />)
  })

})
