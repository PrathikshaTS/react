import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './App.jsx'

function Mychai(){
  return(
    <h1>hello</h1>
  )
}

const element=(
  <a href="https://www.google.co.in/" target='_blank'>click me</a>
)

const val="23456";
const reactElement=React.createElement(
  'a',
  {
    href:"https://www.google.co.in/",
    target:'_blank'
  },
  "click me to go to google",
  val
)
createRoot(document.getElementById('root')).render(
  /*<>
     <App/>
     <Mychai/>
  </>
 */
  
  // element

  reactElement
  // <App/>
)
