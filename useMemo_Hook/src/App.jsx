import { useState } from 'react'

import './App.css'

function App() {
  const [plus,setPlus]=useState(0);
  const [minus,setMinus]=useState(99);
  const trouble=()=>
  {
    console.log('......')
    return plus*5
  }

  return (
    <div>
      <h1>{trouble()}</h1>
      <button onClick={()=>setPlus(plus+1)}> Plus-{plus}</button>
      <button onClick={()=>setMinus(minus-1)}> Minus-{minus}</button>



    </div>
  )
}

export default App
