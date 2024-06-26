import { createSlice } from '@reduxjs/toolkit'

/*
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
*/

const filterSlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    filterChange(state, action) {
      return action.payload
    }
  },
})

// export { filterReducer, filterChange }

export const { filterChange } = filterSlice.actions
export default filterSlice.reducer