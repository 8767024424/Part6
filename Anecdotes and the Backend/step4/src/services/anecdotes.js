const baseUrl = 'http://localhost:3001/anecdotes'

export const getAll = async () => {
  const response = await fetch(baseUrl)
  return response.json()
}

export const createNew = async (content) => {
  const newAnecdote = { content, votes: 0 }
  const response = await fetch(baseUrl, {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(newAnecdote)
  })
  return response.json()
}

export const updateVotes = async (id, updatedAnecdote) => {
  const response = await fetch(`${baseUrl}/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(updatedAnecdote)
  })
  return response.json()
}
