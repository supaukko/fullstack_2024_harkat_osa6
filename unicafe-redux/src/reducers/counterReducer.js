
const initialState = {
  good: 0,
  ok: 0,
  bad: 0
}

const handleType = (state, type) => {
  console.log('handleType', type, state)
  let newState = { ...state }
  newState[type]++
  return newState
}

const handleReset = (state) => {
  return { ...initialState }
}

const clickAction = (clickType) => {
  return { type: clickType }
}

const counterReducer = (state = initialState, action) => {
  // console.log('counterReducer', action)
  switch (action.type) {
    case 'GOOD':
      return handleType(state, 'good')
    case 'OK':
      return handleType(state, 'ok')
    case 'BAD':
      return handleType(state, 'bad')
    case 'ZERO': 
      return handleReset(state)
    default: return state
  }
}

export { counterReducer, clickAction }
