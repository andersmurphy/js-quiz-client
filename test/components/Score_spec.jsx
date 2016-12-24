import React from 'react'
import ReactDOM from 'react-dom'
import {shallow, mount} from 'enzyme'
import {Score} from '../../src/components/Score'
import {expect} from 'chai'


describe('Score', () => {

  it('renders score', () => {
    const component = shallow(<Score totalScore={25} />)
    expect(component.type()).to.equal('div')
    expect(component.hasClass('score'))

    const paragraph = component.childAt(0)
    expect(paragraph.type()).to.equal('p')
    expect(paragraph.text()).to.equal('Points so far: 25')
  })

  it('handles missing props', () => {
    const wrapper = shallow(<Score />)
  })

})
