import { useDispatch, useSelector } from 'react-redux'
import { increaseVotesAndNotify } from '../reducers/anecdoteReducer'
import Anecdote from './Anecdote'

const AnecdoteList = () => {

  const dispatch = useDispatch()
  const anecdotes = useSelector(({anecdotes, filter}) => {
    if (filter?.trim() !== '') {
        return anecdotes.filter(anecdote => anecdote.content?.includes(filter));
    }
    return anecdotes
  })

  return(
    <div>
      {anecdotes.map(anecdote =>
        <Anecdote
          key={anecdote.id}
          anecdote={anecdote}
          // Slicen kutsu vastaa tätä:
          // dispatch({ type: 'anecdotes/increaseVotes', payload: anecdote })
          handleClick={() => increaseVotesAndNotify(dispatch, anecdote)}
        />
      )}
    </div>
  )
}

export default AnecdoteList