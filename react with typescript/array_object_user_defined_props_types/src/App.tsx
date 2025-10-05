
import './App.css'
import Userdemo from './Components/Userdemo'

function App() {
const users=[
  {
    id:1,
    name:"Khalid",
    email:'khalid@gmail.com',
    age:32
  },
  {
    id:2,
    name:'Akash',
    email:'akash@gmail.com',
    age:444
  }
]
  return (
    <div>
      <h1>App</h1>
      <Userdemo users={users}/>
    </div>
  )
}

export default App
