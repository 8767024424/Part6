import { useDispatch } from 'react-redux'
import { addAnecdote } from '../reducers/anecdoteReducer'
import { nanoid } from '@reduxjs/toolkit'

const AnecdoteForm = () => {
  const dispatch = useDispatch()

  const createAnecdote = event => {
    event.preventDefault()
    const content = event.target.anecdote.value
    event.target.anecdote.value = ''

    dispatch(addAnecdote({ content, votes: 0, id: nanoid() }))
  }

  return (
    <form onSubmit={createAnecdote}>
      <input name="anecdote" />
      <button type="submit">create</button>
    </form>
  )
}

export default AnecdoteForm
