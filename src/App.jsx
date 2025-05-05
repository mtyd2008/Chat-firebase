import React, { useState } from 'react'
import Auth from './components/Auth'
// import './App.css'
import Cookies from 'universal-cookie'
const cookies =  new Cookies()

function App() {
  const [isAuth , setIsAuth] = useState(cookies.get('auth-token'))
  const [room , setRoom] = useState(null)
  
  if(!isAuth){
  return (
    <>
      <div> <Auth /> </div>
    </>
  )
}

  return (
    <div>
      {room ? ( 
      <div>Chat</div> 
      ): (<div>
        <label htmlFor="">Enter Room Name</label>
        <input  />
        <button>Enter Chat</button>
        </div>
        )}
    </div>
  )
}

export default App
