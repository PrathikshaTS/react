import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './Components/card'
function App() {
  
  const myObj={
    name:"Sammy",
    age:19
  }
  const arr=[1,2,3]
  return (
    <>
        <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4'>Tailwind Testing</h1>
        
        {/* <Card channel="ChaiaurCode" obj={myObj} myArr={arr}/> */}
        <Card channel="ChaiaurCode" />
        <Card channel="ChaiaurCode2" />
    </>
  )
}

export default App
