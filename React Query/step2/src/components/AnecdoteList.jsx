import { useQuery } from '@tanstack/react-query'
import { getAnecdotes } from '../services/anecdotes'

const AnecdoteList = () => {

  const { data: anecdotes, error, isLoading } = useQuery({
    queryKey: ['anecdotes'],
    queryFn: getAnecdotes,
    retry: 1,
  })

  if (isLoading) return <div>loading data...</div>

  if (error) return <div>anecdote service not available due to server problems</div>

  return (
    <div>
      {anecdotes.map(a => (
        <div key={a.id}>
          <div>{a.content}</div>
          <div>
            votes: {a.votes}
          </div>
        </div>
      ))}
    </div>
  )
}

export default AnecdoteList
