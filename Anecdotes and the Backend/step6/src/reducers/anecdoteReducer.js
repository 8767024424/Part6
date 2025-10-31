import { getAll, createNew, updateVotes } from '../services/anecdotes'

const anecdoteReducer = (state = [], action) => {
  switch (action.type) {
    case 'INIT_ANECDOTES':
      return action.data
    case 'NEW_ANECDOTE':
      return [...state, action.data]
    case 'VOTE':
      return state.map(a =>
        a.id !== action.data.id ? a : action.data
      )
    default:
      return state
  }
}

// ✅ Thunk action creators
export const initializeAnecdotes = () => {
  return async dispatch => {
    const anecdotes = await getAll()
    dispatch({
      type: 'INIT_ANECDOTES',
      data: anecdotes
    })
  }
}

export const createAnecdote = (content) => {
  return async dispatch => {
    const newAnecdote = await createNew(content)
    dispatch({
      type: 'NEW_ANECDOTE',
      data: newAnecdote
    })
  }
}

export const voteAnecdote = (anecdote) => {
  return async dispatch => {
    const updated = await updateVotes(anecdote.id, {
      ...anecdote,
      votes: anecdote.votes + 1
    })
    dispatch({
      type: 'VOTE',
      data: updated
    })
  }
}

export default anecdoteReducer
