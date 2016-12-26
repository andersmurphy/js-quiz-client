import React from 'react'
import {expect} from 'chai'
import {shallow} from 'enzyme'
import {Start} from '../../src/components/Start'

describe('Start', () => {
  let component

  beforeEach(() => {
    component = shallow(<Start />)
  })

  it('renders quiz title', () => {
      const header = component.childAt(0)

      expect(header.type()).to.equal('h3')
      expect(header.text()).to.equal('Welcome to the Cash Flow Quiz!')
  })

  it('renders what is your name?', () => {
      const paragraph = component.childAt(1)

      expect(paragraph.type()).to.equal('p')
      expect(paragraph.text()).to.equal('What is your name?')
  })

  it('renders text field', () => {
    const input = component.childAt(2)

    expect(input.type()).to.equal('input')
    expect(input.text()).to.equal('')
  })

  it('renders next button', () => {
    const button = component.find('button')

    expect(button.text()).to.equal('Next')
  })

  it('invokes the next callback when next button is clicked', () => {
    let nextInvoked = false
    const next = () => nextInvoked = true
    const component = shallow(<Start next={next} name={''}/>)

    component.find('button').simulate('click')

    expect(nextInvoked).to.equal(true)
  })

  it('invokes the setName callback when setName input changes', () => {
    let setNameInvoked = false
    const setName = () => setNameInvoked = true
    const component = shallow(<Start setName={setName} name={''}/>)

    component.find('input').simulate('change', { target: {value:'some value'} })

    expect(setNameInvoked).to.equal(true)
  })

  it('disables next button if name is an empty string', () =>  {
    const component = shallow(<Start name={''}/>)

    const button = component.find('button')

    expect(button.prop('disabled')).to.equal(true);
  })

  it('enables next button if name is not empty string', () =>  {
    const component = shallow(<Start name={'Anders'}/>)

    const button = component.find('button')

    expect(button.prop('disabled')).to.equal(false);
  })
})
