import { useCallback, useState } from 'react'

import './App.css'
import Another from './Components/Another'

function App() {
  const [count, setCount] = useState(0)
  const nextOne=useCallback(()=>{

  },[])

  return (
    <div>
      <Another nextOne={nextOne}></Another>
      <button onClick={()=>setCount(count+1)}>click-{count}</button>
    </div>
  )
}

export default App
