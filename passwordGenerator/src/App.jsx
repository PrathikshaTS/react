import { useCallback, useEffect, useRef, useState } from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [numsAllowed,setNumsAllowed]=useState(false)
  const [charAllowed,setCharAllowed]=useState(false)
  const [password,setPassword]=useState("")

  const pswdRef=useRef(null)

  const passwordGenerator=useCallback(()=>{
    let pswd=""
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(numsAllowed)str+="0123456789"
    if(charAllowed)str+="!@#$%^&*-_"
    for (let i = 1; i <= length; i++) {
      let idx=Math.floor(Math.random()*str.length+1)
      pswd+=str.charAt(idx);
    }
    setPassword(pswd)

  },[length,numsAllowed,charAllowed,setPassword])

  const copyToClipboard=useCallback(()=>{
    pswdRef.current?.select()
    window.navigator.clipboard.writeText(password)
  },[password])

  useEffect(()=>{
    passwordGenerator()
  },[length,numsAllowed,charAllowed,passwordGenerator])
  return (
    <>
        
        <div className='w-full max-w-md mx-auto shadow-md rounded-3xl px-4 py-3 my-8 bg-gray-800 text-orange-500'>
            <h1 class="text-4xl text-center text-white my-2">
             Password Generator
            </h1>
             <div className="flex shadow rounded-xl overflow-hidden mb-4"> 
                
                <input 
                type="text" 
                value={password} 
                className="outline-none w-full py-1 px-3 bg-amber-50"
                placeholder="Password"
                readOnly
                ref={pswdRef}
                />
                <button onClick={copyToClipboard}
                className='outline-none bg-blue-500 text-white px-3 shrink-0'>copy</button>
              </div> 
              <div  className='flex text-sm gap-x-2'>
                  <div className='flex items-center gap-x-1'>
                    <input 
                    type="range" 
                    min={8}
                    max={20}
                    value={length}
                    className='cursor-pointer'
                    onChange={(e)=>{setLength(e.target.value)}}
                    />
                    <label>length:{length}</label>
                  </div>
                  <div className='flex items-center gap-x-1'>
                    <input 
                    type="checkbox"
                    defaultChecked={numsAllowed} 
                    id='numInput'
                    onChange={(e)=>{setNumsAllowed((prev)=>!prev)}}
                    />
                    <label htmlFor="numberInput">Numbers</label>
                  </div>
                  <div className="flex items-center gap-x-1">
                      <input
                        type="checkbox"
                        defaultChecked={charAllowed}
                        id="characterInput"
                        onChange={() => {
                        setCharAllowed((prev) => !prev )
                        }}
                      />
                      <label htmlFor="characterInput">Characters</label>
                  </div>


                  </div>              
        </div>
    </>
  )
}

export default App
