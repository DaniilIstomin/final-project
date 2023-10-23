// import React from 'react'
// import { useState } from 'react'
// import Hook from './Hook'

// export default function Main() {
//     // const [user, setUser] = useState("")
//     const [inputValue, setInputValue] = useState("")
//     const [user, setUser] = Hook("user", "")
//   return (
//     <div>
//         {user && (
//             <div>
//                 <div>Hi {user}</div>
//                 <button onClick={() => setUser("")}>Log Out</button>
//             </div>
//         )}
//         {!user && (
//             <div>
//                 <label>Введите ваше имя</label>
//                 <input value={inputValue}
//                 onChange={(e) => setInputValue(e.target.value)} />
//                 <button onClick={() => setUser(inputValue)}>Войти</button>
//             </div>
//         )}

//     </div>
//   )
// }
import React from 'react'
import './Main.css'

export default function Main() {
  return (
    <div className='mainPage2'>
     <p className='first-main-text'>На этом сайте можно посмотреть погоду в любом городе мира, пообщаться с самим собой, ну и коненчно же найти фильм, сериал или игрушку на вечер! <br /> Удачного путешествия по моему сайту)</p> 
    
    </div>
  )
}
