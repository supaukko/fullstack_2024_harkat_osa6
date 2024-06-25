const filterChange = (value) => {
    return {
        type: 'SET_FILTER',
        payload: value
    }
}

const filterReducer = (state = '', action) => {
  console.log('filterReducer', action, state)
  switch (action.type) {
    case 'SET_FILTER':
      return action.payload
    default:
      return state
  }
}

export { filterReducer, filterChange }