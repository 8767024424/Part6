import { useDispatch, useSelector } from 'react-redux'
import { voteAnecdote } from '../reducers/anecdoteReducer'
import { filteredAnecdotes } from '../selectors'
import { setNotificationWithTimeout } from '../reducers/notificationReducer'

const AnecdoteList = () => {
  const dispatch = useDispatch()
  const anecdotes = useSelector(filteredAnecdotes)

  const handleVote = (anecdote) => {
    dispatch(voteAnecdote(anecdote.id))
    dispatch(setNotificationWithTimeout(`You voted '${anecdote.content}'`, 5))
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
