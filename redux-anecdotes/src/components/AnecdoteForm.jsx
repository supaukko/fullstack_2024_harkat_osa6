import { useDispatch } from 'react-redux'
import { createAnecdoteAndNotify } from '../reducers/anecdoteReducer'

const AnecdoteForm = () => {
  const dispatch = useDispatch()

  const handleSubmit = async (event) => {
    event.preventDefault()
    const content = event.target.anecdote.value
    event.target.anecdote.value = ''
    dispatch(createAnecdoteAndNotify(content))
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