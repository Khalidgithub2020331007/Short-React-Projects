
import { useReducer } from 'react';
import './App.css'

function App() {
  const initialValue=20;
  const reducer=(state,action)=>
  {
    if (action==='plus')
    {
      return state+1;

    }
    else{
      return state-1
    }
  }

  const [count,dispatch]=useReducer(reducer,initialValue);

  return (
    <div>
      <p>{count}</p>
      <button onClick={()=>dispatch('plus')}>increment</button>
      <button onClick={()=>dispatch('minus')}>increment</button>
    </div>
  )
}

export default App
