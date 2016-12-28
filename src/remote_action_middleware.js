export default socket => store => next => action => {
  const emit = action.meta && action.meta.remote && socket.emit('action', action) 
  return next(action)
}
