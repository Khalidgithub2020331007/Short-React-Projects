
import { useState } from 'react'
import './App.css'
type User={
  id:number,
  name:string
}
function App() {
  const [count,setCount]=useState<null|User>(null)
  const handleIncrement=()=>
  {
    setCount({id:1,name:"khalid"})
    console.log(count)
  }
  return (
    <div>
      {/* <h1>Count-{count}</h1> */}
      <button onClick={handleIncrement}>Increment</button>
      <h1>
        {count?.name}
      </h1>
    </div>
  )
}

export default App
