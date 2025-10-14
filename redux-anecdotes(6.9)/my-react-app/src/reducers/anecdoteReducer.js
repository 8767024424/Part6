// src/reducers/anecdoteReducer.js
// ...
export const createAnecdote = (content) => {
  return {
    type: 'NEW_ANECDOTE',
    payload: {
      content,
      id: (100000 * Math.random()).toFixed(0), // Generate a random ID
      votes: 0,
    },
  };
};
// ...