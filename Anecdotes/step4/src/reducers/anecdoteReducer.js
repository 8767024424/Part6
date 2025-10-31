const initialAnecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place.',
  'Programming without data structures is like a car without wheels.',
].map(content => ({
  content,
  id: Math.random().toString(36).substring(2, 9),
  votes: 0
}))

// Action Creators
export const voteAnecdote = (id) => {
  return {
    type: 'VOTE',
    payload: { id }
  }
}

export const createAnecdote = (content) => {
  return {
    type: 'NEW_ANECDOTE',
    payload: {
      content,
      id: Math.random().toString(36).substring(2, 9),
      votes: 0
    }
  }
}

// Reducer
const anecdoteReducer = (state = initialAnecdotes, action) => {
  switch (action.type) {
    case 'VOTE':
      const id = action.payload.id
      const anecdoteToVote = state.find(a => a.id === id)
      const updatedAnecdote = { ...anecdoteToVote, votes: anecdoteToVote.votes + 1 }

      return [...state.map(a => a.id !== id ? a : updatedAnecdote)]
        .sort((a, b) => b.votes - a.votes) // ✅ Sort by votes

    case 'NEW_ANECDOTE':
      return [...state, action.payload]

    default:
      return state
  }
}

export default anecdoteReducer
