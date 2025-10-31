const anecdotesList = document.getElementById('anecdotes-list');

// Function to fetch anecdotes from the backend
const fetchAnecdotes = async () => {
  try {
    const response = await axios.get('http://localhost:3001/anecdotes');
    const anecdotes = response.data;
    
    // Display the anecdotes on the page
    anecdotes.forEach(anecdote => {
      const listItem = document.createElement('li');
      listItem.textContent = `"${anecdote.content}" - Votes: ${anecdote.votes}`;
      anecdotesList.appendChild(listItem);
    });
  } catch (error) {
    console.error('Error fetching anecdotes:', error);
  }
};

// Fetch anecdotes when the page loads
fetchAnecdotes();