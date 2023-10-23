import React from 'react'
import {Routes,Route} from 'react-router-dom';
// import {BrowserRouter} from 'react-router-dom';
import NavigationTops from './NavigationTops';
import TopGames from './TopGames';
import TopFilms from './TopFilms';
import TopSeries from './TopSeries';
export default function Tops() {
  return (
    <div className='MainTopPage'>
      <NavigationTops/>
    </div>
    
    
      
   
    
  )
}
