import React from 'react'
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import { getAnecdotes, updateAnecdote } from '../services/anecdotes.js'
import { useNotification } from '../context/notificationContext.jsx'

const AnecdoteList = () => {
  const queryClient = useQueryClient()
  const { show } = useNotification()

  const { data: anecdotes, isLoading, isError } = useQuery({
    queryKey: ['anecdotes'],
    queryFn: getAnecdotes,
    retry: false,
  })

  const mutation = useMutation({
    mutationFn: updateAnecdote,
    onSuccess: (updated) => {
      // invalidate to refetch
      queryClient.invalidateQueries(['anecdotes'])
      show(`You voted '${updated.content}'`)
    }
  })

  if (isLoading) return <div>Loading anecdotes...</div>
  if (isError) return <div>Failed to load anecdotes</div>

  return (
    <div style={{ marginTop: 12 }}>
      {anecdotes
        .slice()
        .sort((a,b) => b.votes - a.votes)
        .map(a => (
        <div key={a.id} className="anecdote">
          <div style={{flex:1}}>
            <div>{a.content}</div>
            <div className="meta">has {a.votes} votes</div>
          </div>
          <div>
            <button
              className="vote-btn"
              onClick={() => mutation.mutate({ ...a, votes: a.votes + 1 })}
            >
              vote
            </button>
          </div>
        </div>
      ))}
    </div>
  )
}

export default AnecdoteList
