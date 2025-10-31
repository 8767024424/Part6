import React from 'react'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { createAnecdote } from '../services/anecdotes.js'
import { useNotification } from '../context/notificationContext.jsx'

const AnecdoteForm = () => {
  const queryClient = useQueryClient()
  const { show } = useNotification()

  const mutation = useMutation({
    mutationFn: createAnecdote,
    onSuccess: (newAnecdote) => {
      queryClient.invalidateQueries(['anecdotes'])
      show(`Anecdote added: "${newAnecdote.content}"`)
    }
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    const content = e.target.anecdote.value.trim()
    if (!content) return
    e.target.anecdote.value = ''
    mutation.mutate(content)
  }

  return (
    <form onSubmit={handleSubmit} className="form-row" style={{marginTop:8}}>
      <input name="anecdote" type="text" placeholder="Write a new anecdote..." />
      <button className="btn" type="submit">Add</button>
    </form>
  )
}

export default AnecdoteForm
