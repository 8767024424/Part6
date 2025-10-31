import { createSlice } from '@reduxjs/toolkit'

const anecdoteSlice = createSlice({
  name: 'anecdotes',
  initialState: [
    { content: 'If it hurts, do it more often', id: "1", votes: 0 },
    { content: 'Adding manpower to a late software project makes it later!', id: "2", votes: 0 },
    { content: 'The first 90 percent of the code accounts for the first 90 percent of the development time...', id: "3", votes: 0 }
  ],
  reducers: {
    voteAnecdote(state, action) {
      const id = action.payload
      const anecdote = state.find(a => a.id === id)
      if (anecdote) {
        anecdote.votes += 1
      }
    },
    createAnecdote(state, action) {
      state.push({
        content: action.payload,
        id: Math.floor(Math.random() * 100000).toString(), 
        votes: 0
      })
    }
  }
})

export const { voteAnecdote, createAnecdote } = anecdoteSlice.actions
export default anecdoteSlice.reducer
