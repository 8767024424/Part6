const initialState = {
  good: 0,
  ok: 0,
  bad: 0
}

const counterReducer = (state = initialState, action) => {
  console.log(action)
  switch (action.type) {
    case 'GOOD':
      // Return a new state object with 'good' incremented
      return { ...state, good: state.good + 1 }
    case 'OK':
      // Return a new state object with 'ok' incremented
      return { ...state, ok: state.ok + 1 }
    case 'BAD':
      // Return a new state object with 'bad' incremented
      return { ...state, bad: state.bad + 1 }
    case 'ZERO':
      // Return the initial state, effectively resetting all counters
      return initialState
    default:
      // For any other action, return the current state unchanged
      return state
  }
}

export default counterReducer
