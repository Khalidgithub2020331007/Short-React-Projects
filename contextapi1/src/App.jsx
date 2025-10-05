import React, { createContext, useState } from 'react'
import NavBar from './Component/Navbar/NavBar'
 export const CountContext= createContext('Math')
const App = () => {
  const [count,SetCount]= useState(0)
  return (
    <div>
      <CountContext.Provider value={count}>
        <NavBar></NavBar>
        <button onClick={()=>SetCount(count+1)}>Count is {count}</button>
      </CountContext.Provider>
      
    </div>
  )
}

export default App
