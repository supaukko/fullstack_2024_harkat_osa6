import { createContext, useReducer, useContext } from 'react'

const initialState = {
  notification: ''
}

const notificationReducer = (state, action) => {
  switch (action.type) {
    case "SHOW":
      return {
        ...state,
        notification: action.payload
      }
    case "HIDE":
      return {
        ...state,
        notification: action.payload
      }
    default:
        return state
  }
}

const NotificationContext = createContext()

export const useNotificationValue = () => {
  const { notification } = useContext(NotificationContext)[0];
  return notification;
}

export function useNotification() {
  return useContext(NotificationContext);
}

export const useAddNotification = () => {
  const addNotification = useContext(NotificationContext)[2]
  return addNotification;
}

export const NotificationContextProvider = (props) => {
  const [notification, notificationDispatch] = useReducer(notificationReducer, initialState)

    const addNotification = (message) => {
        // console.log('addNotification', message)
        notificationDispatch({
            type: 'SHOW',
            payload: message,
        });
        setTimeout(() => {
        notificationDispatch({ type: 'HIDE', payload: '' });
        }, 5000);
    }
  
  return (
    <NotificationContext.Provider value={[notification, notificationDispatch, addNotification]}>
      {props.children}
    </NotificationContext.Provider>
  )
}

export default NotificationContext
