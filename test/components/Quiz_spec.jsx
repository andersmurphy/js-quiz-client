import React from 'react'
import {shallow} from 'enzyme'
import {expect} from 'chai'
import {Map, List} from 'immutable'
import {Quiz} from '../../src/components/Quiz'
import {Start} from '../../src/components/Start'
import {Finish} from '../../src/components/Finish'
import {Question} from '../../src/components/Question'

describe('Quiz', () => {

    it('renders start component when currentQuestion is empty', () => {
      const questions = List.of(
        Map({
          question: 'question1',
          answers: Map({'answerA': 0,'answerB': 5,'answerC': 10,'answerD': 15
          })
        }),
        Map({
          question: 'question2',
          answers: Map({'answerA': 0,'answerB': 5,'answerC': 10,'answerD': 15
          })
        })
      )
      const component = shallow(<Quiz questions={questions}/>)

      expect(component.type()).to.equal(Start)
    })

    it('renders question component when currentQuestion is not empty', () => {
      const questions = List.of(
        Map({
          question: 'question1',
          answers: Map({'answerA': 0,'answerB': 5,'answerC': 10,'answerD': 15
          })
        }),
        Map({
          question: 'question2',
          answers: Map({'answerA': 0,'answerB': 5,'answerC': 10,'answerD': 15
          })
        })
      )
      const currentQuestion = Map({
        question: 'question1',
        answers: Map({'answerA': 0,'answerB': 5,'answerC': 10,'answerD': 15})
      })
      const component = shallow(
        <Quiz questions={questions}
                  currentQuestion={currentQuestion}
                  totalScore={25}
                  maxScore={100}
                  name={'john'}/>
      )

      expect(component.type()).to.equal(Question)
    })

    it('renders finish component when questions is empty and currenQuestion is empty', () => {
      const component = shallow(
        <Quiz questions={Map()}
                  currentQuestion={Map()}
                  totalScore={25}
                  maxScore={100}
                  name={'john'}/>
      )

      expect(component.type()).to.equal(Finish)
    })

    it('handles missing props', () => {
      const component = shallow(<Quiz />)
    })

})
