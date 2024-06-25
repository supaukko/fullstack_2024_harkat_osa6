import { useDispatch, useSelector } from 'react-redux'
import { increaseVotes } from '../reducers/anecdoteReducer'
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
          handleClick={() => 
            dispatch(increaseVotes(anecdote.id))
          }
        />
      )}
    </div>
  )
}

export default AnecdoteList