import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import * as anecdoteService from '../services/anecdotes'

export const initializeAnecdotes = createAsyncThunk(
  'anecdotes/init',
  async () => {
    const anecdotes = await anecdoteService.getAll()
    return anecdotes
  }
)

export const createAnecdote = createAsyncThunk(
  'anecdotes/create',
  async (content) => {
    const newAnecdote = await anecdoteService.createNew(content)
    return newAnecdote
  }
)

const anecdoteSlice = createSlice({
  name: 'anecdotes',
  initialState: [],
  reducers: {
    voteAnecdote(state, action) {
      const id = action.payload
      const anecdote = state.find(a => a.id === id)
      anecdote.votes += 1
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(initializeAnecdotes.fulfilled, (_state, action) => {
        return action.payload
      })
      .addCase(createAnecdote.fulfilled, (state, action) => {
        state.push(action.payload)
      })
  }
})

export const { voteAnecdote } = anecdoteSlice.actions
export default anecdoteSlice.reducer
