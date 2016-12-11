import {List, Map, fromJS} from 'immutable'
import {expect} from 'chai'

import reducer from '../src/reducer'

describe('reducer', () => {

  it('handles SET_STATE', () => {
    const initialState = Map()
    const action = {
      type: 'SET_STATE',
      state: Map({
        questions: List.of(Map({
              question: 'question2',
              answers: Map({'answerA': 0,'answerB': 5,'answerC': 10,'answerD': 15})
            }),
            Map({
              question: 'question3',
              answers: Map({'answerA': 0,'answerB': 5,'answerC': 10,'answerD': 15})
            })),
        current_question: Map({
            question: 'question1',
            answers: Map({'answerA': 0,'answerB': 5,'answerC': 10,'answerD': 15}),
            selected_answer: 'answerC'
          })
        })
      }
      const nextState = reducer(initialState, action)

      expect(nextState).to.equal(Map({
        questions: List.of(Map({
              question: 'question2',
              answers: Map({'answerA': 0,'answerB': 5,'answerC': 10,'answerD': 15})
            }),
            Map({
              question: 'question3',
              answers: Map({'answerA': 0,'answerB': 5,'answerC': 10,'answerD': 15})
            })),
        current_question: Map({
            question: 'question1',
            answers: Map({'answerA': 0,'answerB': 5,'answerC': 10,'answerD': 15}),
            selected_answer: 'answerC'
          })
        }))
    })

    it('handles SET_STATE with plain JS payload', () => {
      const initialState = Map()
      const action = {
        type: 'SET_STATE',
        state: {
          questions: [{
                question: 'question2',
                answers: {'answerA': 0,'answerB': 5,'answerC': 10,'answerD': 15}
              },
              {
                question: 'question3',
                answers: {'answerA': 0,'answerB': 5,'answerC': 10,'answerD': 15}
              }],
          current_question: {
              question: 'question1',
              answers: {'answerA': 0,'answerB': 5,'answerC': 10,'answerD': 15},
              selected_answer: 'answerC'
            }
          }
        }
        const nextState = reducer(initialState, action)

        expect(nextState).to.equal(Map({
          questions: List.of(Map({
                question: 'question2',
                answers: Map({'answerA': 0,'answerB': 5,'answerC': 10,'answerD': 15})
              }),
              Map({
                question: 'question3',
                answers: Map({'answerA': 0,'answerB': 5,'answerC': 10,'answerD': 15})
              })),
          current_question: Map({
              question: 'question1',
              answers: Map({'answerA': 0,'answerB': 5,'answerC': 10,'answerD': 15}),
              selected_answer: 'answerC'
            })
          }))
      })

      it('handles SET_STATE without initial state', () => {
        const action = {
          type: 'SET_STATE',
          state: {
            questions: [{
                  question: 'question2',
                  answers: {'answerA': 0,'answerB': 5,'answerC': 10,'answerD': 15}
                },
                {
                  question: 'question3',
                  answers: {'answerA': 0,'answerB': 5,'answerC': 10,'answerD': 15}
                }],
            current_question: {
                question: 'question1',
                answers: {'answerA': 0,'answerB': 5,'answerC': 10,'answerD': 15},
                selected_answer: 'answerC'
              }
            }
          }
          const nextState = reducer(undefined, action)

          expect(nextState).to.equal(Map({
            questions: List.of(Map({
                  question: 'question2',
                  answers: Map({'answerA': 0,'answerB': 5,'answerC': 10,'answerD': 15})
                }),
                Map({
                  question: 'question3',
                  answers: Map({'answerA': 0,'answerB': 5,'answerC': 10,'answerD': 15})
                })),
            current_question: Map({
                question: 'question1',
                answers: Map({'answerA': 0,'answerB': 5,'answerC': 10,'answerD': 15}),
                selected_answer: 'answerC'
              })
            }))
        })
})
