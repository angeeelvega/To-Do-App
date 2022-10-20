import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [todos, setCount] = useState(0)
  const [task , setpopupActive] = useState(false)

  const [popupActive, setpopupActive] = useState(false)

  return (
    <div className="App">

      <h1>Welcome</h1>
      <h4>Your tasks</h4>

      <div className="todos">

    </div>

    <div className="addPopup">
        +
    </div>
  )
}

export default App
