import AnecdoteForm from './components/AnecdoteForm'
import Notification from './components/Notification'
import {
  useAnecdotes,
  useUpdateAnecdote,
  useCreateAnecdote } from './hooks/anecdotes'
import { useAddNotification } from './NotificationContext';

const App = () => {

  const { isPending, isError, data, error } = useAnecdotes()
  const createAnecdote = useCreateAnecdote();
  const updateAnecdote = useUpdateAnecdote();
  const addNotification = useAddNotification();

  const handleVote = async (anecdote) => {
    try {
      const updatedAnecdote = {...anecdote, votes: anecdote.votes + 1}
      // console.log('handleVote', updatedAnecdote)
      await updateAnecdote.mutateAsync( updatedAnecdote )
      addNotification(`anecdote '${updatedAnecdote.content}' voted`)
    }
    catch(error) {
      addNotification(`Error '${error.response.data.error}'`)
    }
  }

  const handleCreateAnecdote = async (anecdote) => {
    console.log('handleCreateAnecdote', anecdote)
    try {
      await createAnecdote.mutateAsync(anecdote)
      addNotification(`anecdote '${anecdote.content}' created`)
    }
    catch(error) {
      addNotification(`Error '${error.response.data.error}'`)
    }
  }

  if (isPending) {
    return <span>Loading...</span>
  }

  if (isError) {
    return <span>Anecdote service not available due to {error.message}</span>
  }

  return (
    <div>
      <h3>Anecdote app</h3> 
      <Notification />
      <AnecdoteForm createAnecdote={handleCreateAnecdote}/>
    
      {data.map(anecdote =>
        <div key={anecdote.id}>
          <div>
            {anecdote.content}
          </div>
          <div>
            has {anecdote.votes}
            <button onClick={() => handleVote(anecdote)}>vote</button>
          </div>
        </div>
      )}
    </div>
  )
}

export default App
