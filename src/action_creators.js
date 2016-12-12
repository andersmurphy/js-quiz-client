export const setState = (state) => {
  return {
    type: 'SET_STATE',
    state
  }
}

export const next = (state) => {
  return {
    meta: {remote: true},
    type: 'NEXT'
  }
}
