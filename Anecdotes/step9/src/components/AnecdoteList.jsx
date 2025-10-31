import { useSelector, useDispatch } from 'react-redux'
import { filteredAnecdotes } from "../selectors.js"
import { voteAnecdote } from '../reducers/anecdoteReducer'

const AnecdoteList = () => {
  const dispatch = useDispatch()
  const anecdotes = useSelector(filteredAnecdotes)

  return (
    <div>
      {anecdotes.map(a => (
        <div key={a.id}>
          <div>{a.content}</div>
          <div>
            votes: {a.votes}
            <button onClick={() => dispatch(voteAnecdote(a.id))}>
              vote
            </button>
          </div>
        </div>
      ))}
    </div>
  )
}

export default AnecdoteList
