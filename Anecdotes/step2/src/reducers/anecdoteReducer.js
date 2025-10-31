import { createSlice } from '@reduxjs/toolkit'

const initialState = [
  { id: 1, content: 'If it hurts, do it more often', votes: 2 },
  { id: 2, content: 'Adding manpower to a late software project makes it later!', votes: 0 },
  { id: 3, content: 'But it works on my machine...', votes: 8 },
]

const anecdoteSlice = createSlice({
  name: 'anecdotes',
  initialState,
  reducers: {
    voteAnecdote(state, action) {
      const id = action.payload
      const anecdote = state.find(a => a.id === id)
      if (anecdote) {
        anecdote.votes += 1
      }
    },
    addAnecdote(state, action) {
      const newAnecdote = {
        id: Math.floor(Math.random() * 100000),
        content: action.payload,
        votes: 0
      }
      state.push(newAnecdote)
    }
  }
})

export const { voteAnecdote, addAnecdote } = anecdoteSlice.actions
export default anecdoteSlice.reducer
