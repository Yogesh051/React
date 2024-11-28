import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UserCard from './components/UserCard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='container'>
      <UserCard name="Virat" style={{"border-radius":"10px"}}/>
      <UserCard name="Rishabh"/>
      <UserCard name="Yogesh"/>
    </div>
  )
}
 
export default App
