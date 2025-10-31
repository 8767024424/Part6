import { createSelector } from '@reduxjs/toolkit'

export const filteredAnecdotes = createSelector(
  [(state) => state.anecdotes, (state) => state.filter],
  (anecdotes, filter) => {
    const query = (filter || "").toLowerCase()

    return anecdotes
      .filter(a => a.content.toLowerCase().includes(query))
      .sort((a, b) => b.votes - a.votes)
  }
)
