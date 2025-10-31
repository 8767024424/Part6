import { useDispatch } from 'react-redux'
import { voteAnecdote } from '../reducers/anecdoteReducer'
import { setNotification } from '../reducers/notificationReducer'
import { useQuery } from '@tanstack/react-query'
import { getAll } from '../services/anecdotes'

const AnecdoteList = () => {
  const dispatch = useDispatch()

  const { data: anecdotes, error, isLoading } = useQuery({
    queryKey: ['anecdotes'],
    queryFn: getAll,   // ✅ use getAll here
    retry: 1           // ✅ retry only once
  })

  if (isLoading) return <div>loading data...</div>

  if (error) return <div>anecdote service not available due to server problems</div>

  const handleVote = (anecdote) => {
    dispatch(voteAnecdote(anecdote.id))
    dispatch(setNotification(`You voted '${anecdote.content}'`, 5))
  }

  return (
    <div>
      {anecdotes.map(a => (
        <div key={a.id}>
          <div>{a.content}</div>
          <div>
            votes: {a.votes}
            <button onClick={() => handleVote(a)}>vote</button>
          </div>
        </div>
      ))}
    </div>
  )
}

export default AnecdoteList
