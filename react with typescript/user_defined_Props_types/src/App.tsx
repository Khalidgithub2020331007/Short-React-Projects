
import './App.css'
import User from './Components/User'
const user1={
  name:'Akib',
  age:25, 
  register:false,
  lang:['bangla','english']
}
function App() {

  return (
    <div>
      <h1>user Mannagement</h1>
      <User user={user1} ></User>

    </div>
    
  )
}

export default App
