
import { useState } from 'react'
import './App.css'
import College from './Components/College'
import { SubjectContext } from './Components/Contextdata'

function App() {
  const [subject,setSubject]=useState('english')

  return (
    <div style={{background:'yellow',padding:10}}>
      <SubjectContext value={subject}>
        <select defaultValue={subject} onClick={()=>{setSubject(event.target.value)}}>
          <option value="">Select Subject</option>
          <option value="math">Math</option>
          <option value="english">English</option>
          <option value="bangla">Bangla</option>
          <option value="science">Science</option>
        </select>
        <button onClick={()=>{setSubject('')}}>Clear</button>
        <h1>APP</h1>


        <College></College>
      </SubjectContext>
    </div>
  )
}

export default App
