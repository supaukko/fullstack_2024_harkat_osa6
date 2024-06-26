import { createSlice } from '@reduxjs/toolkit'
import { showNotification, hideNotification } from '../reducers/notificationReducer'

const anecdotesAtStart = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

const getId = () => (100000 * Math.random()).toFixed(0)

const asObject = (anecdote) => {
  return {
    content: anecdote,
    id: getId(),
    votes: 0
  }
}

const initialState = anecdotesAtStart.map(asObject)

/* Actionit ja reduced korvattu React toolkitin createSlice-funktiolla
const increaseVotes = (id) => {
  return {
    type: 'INCREASE_ANECDOTE_VOTES',
    payload: { id }
  }
}

const addAnecdote = (anecdote) => {
return {
    type: 'NEW_ANECDOTE',
    payload: asObject(anecdote)
  }
}

const anecdoteReducer = (state = initialState, action) => {
  console.log('anecdoteReducer', action, state)

  switch (action.type) {
    case 'NEW_ANECDOTE':
      return [...state, action.payload].sort((a, b) => b.votes - a.votes)
    case 'INCREASE_ANECDOTE_VOTES': {
      const id = action.payload.id
      const anecdoteToChange = state.find(item => item.id === id)
      const changedAnecdote = { 
        ...anecdoteToChange,
        votes: anecdoteToChange.votes + 1 
      }
      return state
        .map(item => item.id !== id ? item : changedAnecdote)
        .sort((a, b) => b.votes - a.votes)
    }
    default:
      return state
  }
}
*/

/**
 * Redux Toolkit hyödyntää createSlice-funktion avulla määritellyissä reducereissa
 * Immer-kirjastoa, joka mahdollistaa state-argumentin mutatoinnin reducerin sisällä.
 * Immer muodostaa mutatoidun tilan perusteella uuden, immutablen tilan ja näin
 * tilamuutosten immutabiliteetti säilyy.
 */
const anecdoteSlice = createSlice({
  name: 'anecdotes',
  initialState,
  reducers: {
    addAnecdote(state, action) {
      // Mutatoinnin on salittua reducerin sisällä kiitos Immer-toteutuksen
      state.push(asObject(action.payload))
      

    },
    increaseVotes(state, action) {
      const id = action.payload.id
      const anecdoteToChange = state.find(item => item.id === id)
      const changedAnecdote = { 
        ...anecdoteToChange,
        votes: anecdoteToChange.votes + 1 
      }
      return state
        .map(item => item.id !== id ? item : changedAnecdote)
        .sort((a, b) => b.votes - a.votes)
    }
  },
})

// export { anecdoteReducer, increaseVotes, addAnecdote }

export const { addAnecdote, increaseVotes } = anecdoteSlice.actions
export default anecdoteSlice.reducer

export const addAnecdoteAndNotify = (dispatch, content) => {
  dispatch(addAnecdote(content));
  dispatch(showNotification(`You added '${content}'`));
  setTimeout(() => {
    dispatch(hideNotification());
  }, 5000);
};

export const increaseVotesAndNotify = (dispatch, anecdote) => {
  dispatch(increaseVotes(anecdote));
  dispatch(showNotification(`You voted '${anecdote.content}'`));
  setTimeout(() => {
    dispatch(hideNotification());
  }, 5000);
};
