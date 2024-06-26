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

  const handleClick = async (dispatch, anecdote) => {
    const updatedAnecdote = await anecdoteService.update(
        {...anecdote, votes: anecdote.votes + 1})
    console.log('AnecdoteList handleClick', updatedAnecdote)
    updateAnecdoteAndNotify(dispatch, updatedAnecdote)
  }

  console.log('AnecdoteList', anecdotes)

  return(
    <div>
      {anecdotes.map(anecdote =>
        <Anecdote
          key={anecdote.id}
          anecdote={anecdote}
          // Slicen kutsu vastaa tätä:
          // dispatch({ type: 'anecdotes/increaseVotes', payload: anecdote })
          handleClick={() => handleClick(dispatch, anecdote)}
        />
      )}
    </div>
  )
}

export default AnecdoteList