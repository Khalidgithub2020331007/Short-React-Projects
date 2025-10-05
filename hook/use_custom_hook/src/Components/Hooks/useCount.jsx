import React, { useState } from 'react'

const useCount = (initialValue=0) => {
    const [counter,setCounter]=useState(initialValue);
    const increment=()=>{
        setCounter(counter+1)
    }
    const decrement=()=>{
        setCounter(counter-1)

    }
  return [counter,increment,decrement]
}

export default useCount
