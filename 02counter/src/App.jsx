import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
  const [counter, setCounter] = useState(5); //useState -> hook ,[coutner, setCounter] -> array with vairable name
  function addValue() {
    if(counter < 20)
    // counter++;
    setCounter(counter + 1)
    setCounter(counter + 1)  // (batches) these two line or if it is more then also it only increment the counter value by 1 combinedly. (+1)
    setCounter(prevCounter => prevCounter +1)
    setCounter(a => a +1)
    setCounter(banana => banana +1)
    setCounter(hello => hello +1) // we can define any name function,it will refer to the counter. (+4)
    console.log("Clicked add", counter);
  }
  const removeValue = () => {
    if(counter > 0 ){
      // counter--;
      setCounter(counter-1);
    }
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
