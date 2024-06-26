import { useDispatch } from 'react-redux'
import { createAnecdoteAndNotify } from '../reducers/anecdoteReducer'
import anecdoteService from '../services/anecdotes'

const AnecdoteForm = () => {
  const dispatch = useDispatch()

  const handleSubmit = async (event) => {
    event.preventDefault()
    const content = event.target.anecdote.value
    event.target.anecdote.value = ''
    const anecdote = await anecdoteService.create(
      { content, votes: 0 } )
    createAnecdoteAndNotify(dispatch, anecdote)
  }

  return (
    <div>
        <h2>create new</h2>
        <form onSubmit={handleSubmit}>
        <input name="anecdote" />
        <button type="submit">add</button>
        </form>
    </div>
  )
}

export default AnecdoteForm