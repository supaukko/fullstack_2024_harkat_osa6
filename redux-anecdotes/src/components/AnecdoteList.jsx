import { useDispatch, useSelector } from 'react-redux'
import { updateAnecdoteAndNotify } from '../reducers/anecdoteReducer'
import Anecdote from './Anecdote'
import anecdoteService from '../services/anecdotes'

const AnecdoteList = () => {

  const dispatch = useDispatch()
  const anecdotes = useSelector(({anecdotes, filter}) => {
    if (filter?.trim() !== '') {
        return anecdotes.filter(anecdote => anecdote.content?.includes(filter));
    }
    return anecdotes
  })

  // console.log('AnecdoteList', anecdotes)

  return(
    <div>
      {anecdotes.map(anecdote =>
        <Anecdote
          key={anecdote.id}
          anecdote={anecdote}
          // Slicen kutsu vastaa tätä:
          // dispatch({ type: 'anecdotes/increaseVotes', payload: anecdote })
          handleClick={() => dispatch(updateAnecdoteAndNotify(
            {...anecdote, votes: anecdote.votes + 1}))}
        />
      )}
    </div>
  )
}

export default AnecdoteList