import React from 'react'
import useCount from '../Hooks/useCount'

const Context2 = () => {
  const [counter,increment,decrement]=useCount(5)
  return (
    <div>
        <h1>{counter}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  )
}

export default Context2
