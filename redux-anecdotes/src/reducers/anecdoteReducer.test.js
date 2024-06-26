import anecdoteReducer from './anecdoteReducer'
import deepFreeze from 'deep-freeze'

describe('anecdoteReducer', () => {
  test('returns new state with action anecdotes/addAnecdote', () => {
    const state = []
    const action = {
      type: 'anecdotes/addAnecdote',
      payload: 'the app state is in redux store',
    }

    deepFreeze(state)
    const newState = anecdoteReducer(state, action)

    expect(newState).toHaveLength(1)
    expect(newState.map(s => s.content)).toContainEqual(action.payload)
  })

  test('returns new state with action anecdotes/increaseVotes', () => {
    let anecdote2 = {
        content: 'anecdote2',
        id: 2,
        votes: 0
    }
    const state = [
      {
        content: 'anecdote1',
        id: 1,
        votes: 0
      },
      {...anecdote2}
      ]
  
    anecdote2.votes++
    const action = {
      type: 'anecdotes/increaseVotes',
      payload: {...anecdote2}
    }
  
    deepFreeze(state)
    const newState = anecdoteReducer(state, action)
    console.log('newState', newState)
  
    expect(newState).toHaveLength(2)
  
    expect(newState).toContainEqual(state[0])
  
    expect(newState[0]).toEqual(anecdote2)
  })
})