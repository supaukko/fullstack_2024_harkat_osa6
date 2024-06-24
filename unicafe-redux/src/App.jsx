

import { clickAction } from './reducers/counterReducer'
import { useSelector, useDispatch } from 'react-redux'

const App = () => {
  const dispatch = useDispatch()
  const counterState = useSelector(state => state)

  const handleClick = (type) => {
    dispatch(clickAction(type))
  }

  return (
    <div>
      <button onClick={() => handleClick('GOOD')}>good</button> 
      <button onClick={() => handleClick('OK')}>ok</button> 
      <button onClick={() => handleClick('BAD')}>bad</button>
      <button onClick={() => handleClick('ZERO')}>reset stats</button>
      <div>good {counterState.good}</div>
      <div>ok {counterState.ok}</div>
      <div>bad {counterState.bad}</div>
    </div>
  )
}

export default App