export const setState = (state) => {
  return {
    type: 'SET_STATE',
    state
  }
}

export const next = () => {
  return {
    meta: {remote: true},
    type: 'NEXT'
  }
}

export const setName = (name) => {
  return {
    meta: {remote: true},
    type: 'SET_NAME',
    name
  }
}
