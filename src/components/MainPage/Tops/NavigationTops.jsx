import React from 'react'
import {Link} from "react-router-dom"
import './StyleForNavigation.css'
export default function NavigationTops() {
  return (
    <div className='NavigationPage'>
        <div className='topGames2' ><Link style={{color: "black", textDecoration: "none"}} to='/topgames'><button className='topGames'>Топ 10 Игр</button></Link></div>
        <div className='topGames2' ><Link style={{color: "black", textDecoration: "none"}} to='/topfilms'><button className='topGames'>Топ 10 Фильмов</button></Link></div>
        <div className='topGames2'><Link style={{color: "black", textDecoration: "none"}} to='/topseries'><button className='topGames'>Топ 10 Сериалов</button></Link></div>
    </div>
  )
}
