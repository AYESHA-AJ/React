import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter,setCounter]=useState(5)

  const addValue = () => {
    if (counter >= 20)
      setCounter(20)
    else {
      counter += 1;
      setCounter(counter)
    }
    
  }
  const removeValue = () => {
    if (counter == 0)
      setCounter(0);
    else
    setCounter(counter - 1);
    

  }
  return (
    <>
      <h1>Ayesha codes</h1>
      <h2>Counter value:{counter}</h2>
      <button onClick={addValue}>
        Add value 
      </button>
      <br/>
      <button onClick={removeValue}>Decrease value </button>
      <p>footer: {counter}</p>
    </>
  )
}

export default App
