import { useDispatch } from 'react-redux'
import { createAnecdote } from '../reducers/anecdoteReducer'
import { useState } from 'react'

const AnecdoteForm = () => {
  const [content, setContent] = useState('')
  const dispatch = useDispatch()

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(createAnecdote(content))
    setContent('')
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <button type="submit">create</button>
    </form>
  )
}

export default AnecdoteForm
