import React from 'react'
import ReactDOM from 'react-dom'
import {shallow} from 'enzyme'
import {Finish} from '../../src/components/Finish'
import {expect} from 'chai'

describe('Finish', () => {

  let component

  beforeEach(() => {
    component = shallow(<Finish totalScore={25} maxScore={100} name={'john'}/>)
  })

  it('renders thank you message', () => {
    const header = component.childAt(0)

    expect(header.type()).to.equal('h3')
    expect(header.text()).to.equal('Thank you john!')
  })

  it('renders overal score', () => {
    const paragraph = component.childAt(1)

    expect(paragraph.type()).to.equal('p')
    expect(paragraph.text()).to.equal('You scored 25 points out of a possible 100 in our cash flow quiz')
  })

  it('renders try again', () => {
    const button = component.childAt(2)

    expect(button.type()).to.equal('button')
    expect(button.text()).to.equal('Try Again')
  })

  it('handles missing props', () => {
    const component = shallow(<Finish />)
  })

  it('invokes the tryAgain callback when tryAgain button is clicked', () => {
    let tryAgainInvoked = false
    const tryAgain = () => tryAgainInvoked = true
    const component = shallow(<Finish tryAgain={tryAgain}/>)

    component.find('button').simulate('click')

    expect(tryAgainInvoked).to.equal(true)
  })

})
