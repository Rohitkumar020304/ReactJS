import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
  let [counter, setCounter] = useState(5);
  function addValue() {
    if(counter < 20)
    counter++;
    setCounter(counter)
    console.log("Clicked add", counter);
  }
  const removeValue = () => {
    if(counter > 0 ){
      counter--;
    }
    setCounter(counter)
    console.log("Clicked remove", counter);
  }
  return (
    <>
      <h1>kya dekhne aaye ho?</h1>
      <h2>Counter value: {counter} </h2>

      <button
      onClick = {addValue}
        > Add value {counter}</button>
        
      <br />
      <button
      onClick = {removeValue}
      >remove value {counter}</button>
      <footer>this is footer {counter}</footer>
    </>
  )
}

export default App
