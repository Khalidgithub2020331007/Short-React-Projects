import React, { useContext } from 'react'
import { SubjectContext } from './Contextdata'

const Subject = () => {
    const subject= useContext(SubjectContext)
  return (
    <div  style={{background:'red',padding:10}}>
        <h1>Subject:{subject}</h1>
      
    </div>
  )
}

export default Subject
