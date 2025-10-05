
import './App.css'
import User from './Component/User'

function App() {

  return (
   <div>
    <h2>User management</h2>
    <User name='Khalid' age={23} register={true}></User>
    <User name='Akib' age={25} register={false}></User>
   </div>
  )
}

export default App
