import {Map} from 'immutable'

const actions = Map({
  'SET_STATE': (state, action) => state.merge(state, action.state)
})

export default (state = Map(), action) => {
  return actions.get(action.type, () => state)(state, action)
}
