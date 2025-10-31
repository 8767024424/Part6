import { useSelector, useDispatch } from 'react-redux'
import { voteAnecdote } from '../reducers/anecdoteReducer'

const AnecdoteList = () => {
  // ✅ Select only anecdotes slice — not the whole state!
  const anecdotes = useSelector(state => state.anecdotes)
  const dispatch = useDispatch()

  return (
    <div>
      {anecdotes
        .slice() // ✅ create copy so sort won't mutate state
        .sort((a, b) => b.votes - a.votes)
        .map(anecdote => (
        <div key={anecdote.id}>
          <div>{anecdote.content}</div>
          <div>
            has {anecdote.votes} 
            <button onClick={() => dispatch(voteAnecdote(anecdote.id))}>
              vote
            </button>
          </div>
          <br />
        </div>
      ))}
    </div>
  )
}

export default AnecdoteList
