import React from 'react'
import {Link} from "react-router-dom";
import "./NavBar.css"
export default function NavBar() {
  return (
    <div className='NavBarContainer'>
            <div><Link style={{color: "white", textDecoration: "none"}} to = '/'>Главная</Link></div>
            {/* <div><Link style={{color: "black", textDecoration: "none"}} to = '/'>Главная</Link></div> */}
            <div><Link style={{color: "white", textDecoration: "none"}} to = '/chat'>Чатик</Link></div>
            <div><Link style={{color: "white", textDecoration: "none"}} to = '/forecast'>Прогноз погоды</Link></div>
            <div><Link style={{color: "white", textDecoration: "none"}} to = '/tops'>Топы</Link></div>
            <div><Link style={{color: "white", textDecoration: "none"}} to = '/authorization'>Авторизация</Link></div>
    </div>
  )
}
