import { createSlice } from '@reduxjs/toolkit'

const notificationSlice = createSlice({
  name: 'notification',
  initialState: {
    msg: '',
    visible: false
  },
  reducers: {
    showNotification(state, action) {
      state.msg = action.payload
      state.visible = true
    },
    hideNotification(state, action) {
      state.visible = false
    }
  },
})

export const { showNotification, hideNotification } = notificationSlice.actions
export default notificationSlice.reducer