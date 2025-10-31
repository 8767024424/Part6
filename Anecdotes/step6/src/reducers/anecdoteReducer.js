import { createSlice } from '@reduxjs/toolkit'

const generateId = () => Math.floor(Math.random() * 100000)

const anecdoteSlice = createSlice({
  name: 'anecdotes',
  initialState: [
    { content: 'If it hurts, do it more often', votes: 0, id: generateId() },
    { content: 'Adding manpower to a late software project makes it later!', votes: 0, id: generateId() }
  ],
  reducers: {
    addAnecdote(state, action) {
      state.push({
        content: action.payload,
        votes: 0,
        id: generateId()
      })
    },
    voteAnecdote(state, action) {
      const id = action.payload
      const anecdote = state.find(a => a.id === id)
      anecdote.votes++
    }
  }
})

export const { addAnecdote, voteAnecdote } = anecdoteSlice.actions
export default anecdoteSlice.reducer
