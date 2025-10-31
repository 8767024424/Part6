import { useDispatch } from 'react-redux'
import { addAnecdote } from '../reducers/anecdoteReducer'

const AnecdoteForm = () => {
  const dispatch = useDispatch()

  const addNewAnecdote = (event) => {
    event.preventDefault()
    const content = event.target.anecdote.value
    dispatch(addAnecdote(content))
    event.target.anecdote.value = ''
  }

  return (
    <form onSubmit={addNewAnecdote}>
      <h2>Create new</h2>
      <input name="anecdote" />
      <button type="submit">add</button>
    </form>
  )
}

export default AnecdoteForm
