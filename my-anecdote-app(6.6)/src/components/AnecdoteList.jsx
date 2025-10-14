import { useSelector, useDispatch } from 'react-redux';
import { vote } from '../reducers/anecdoteSlice';

const AnecdoteList = () => {
  const anecdotes = useSelector(state => state.anecdotes);
  const dispatch = useDispatch();

  const handleVote = (id) => {
    dispatch(vote(id));
  };

  const sortedAnecdotes = [...anecdotes].sort((a, b) => b.votes - a.votes);

  return (
    <>
      {sortedAnecdotes.map(anecdote =>
        <div key={anecdote.id}>
          <div>
            {anecdote.content}
          </div>
          <div>
            has {anecdote.votes}
            <button onClick={() => handleVote(anecdote.id)}>vote</button>
          </div>
        </div>
      )}
    </>
  );
};

export default AnecdoteList;