import { useMutation, useQueryClient } from '@tanstack/react-query'
import { createNew } from '../services/anecdotes'
import { useDispatch } from 'react-redux'
import { setNotification } from '../reducers/notificationReducer'

const AnecdoteForm = () => {
  const dispatch = useDispatch()
  const queryClient = useQueryClient()

  const newAnecdoteMutation = useMutation({
    mutationFn: createNew,
    onSuccess: (newAnecdote) => {
      // refresh list data
      queryClient.invalidateQueries({ queryKey: ['anecdotes'] })
      dispatch(setNotification(`Anecdote '${newAnecdote.content}' created!`, 5))
    }
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    const content = e.target.anecdote.value
    e.target.anecdote.value = ''

    newAnecdoteMutation.mutate(content)
  }

  return (
    <div>
      <h3>create new</h3>
      <form onSubmit={handleSubmit}>
        <input name="anecdote" />
        <button type="submit">create</button>
      </form>
    </div>
  )
}

export default AnecdoteForm
