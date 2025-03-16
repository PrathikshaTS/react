import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [counter,setCounter]=useState(5)
  // let counter=5;
  const IncVal=()=>{
    console.log(counter);
    
    // counter++;
    setCounter(counter+1)

  }
  const DecVal=()=>{
    setCounter(counter-1);
  }
  return (
   <>
    <h1>food aur react</h1>
    <h2>counter:{counter}</h2>
    <button onClick={IncVal}>Increase value{counter}</button>
    <br/>
    <br/>
    <button onClick={DecVal}>Decrease value{counter}</button>
   </>
  )
}

export default App
