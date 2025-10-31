import { useSelector, useDispatch } from "react-redux"
import { voteAnecdote } from "../reducers/anecdoteReducer"

const AnecdoteList = () => {
  const dispatch = useDispatch()

  const anecdotes = useSelector((state) =>
    [...state.anecdotes].sort((a, b) => b.votes - a.votes)
  )

  const handleVote = (anecdote) => {
    dispatch(voteAnecdote(anecdote.id))
  }

  return (
    <div>
      {anecdotes.map(anecdote => (
        <div key={anecdote.id} style={{ marginBottom: "10px" }}>
          <div>{anecdote.content}</div>
          <div>
            has {anecdote.votes}
            <button onClick={() => handleVote(anecdote)} style={{ marginLeft: "10px" }}>
              vote
            </button>
          </div>
        </div>
      ))}
    </div>
  )
}

export default AnecdoteList
