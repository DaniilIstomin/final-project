import React from 'react'
import { useState } from 'react'
import Hook from '../Main/Hook'
// import Hook from './Hook'
import "./Authorization.css"
export default function Authorization() {
    // const [user, setUser] = useState("")
    // const [inputValue, setInputValue] = useState("")
    const [firstName, setFirstName] = useState("")
    const [user, setUser] = Hook("USER", "")
    
    
  return (
    <div >
        {user && (
            <div className='profile'>
                <div>Hi, {user}</div>
                <button onClick={() => setUser("")}>Log Out</button>
            </div>
        )}
        {!user && (
            <div className='main-profile-page'>
                <div className='registration'>
                <label>Ваше имя:</label>
                <input value={firstName}
                onChange={(e) => setFirstName(e.target.value)} placeholder='Имя'/>
                <button onClick={() => setUser(firstName)}>Войти</button>
                </div>
            </div>
        )}

    </div>
  )
}
