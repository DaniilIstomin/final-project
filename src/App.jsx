import logo from './logo.svg';
import {Routes,Route} from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import Main from './components/MainPage/Main/Main';
import Chat from './components/MainPage/Chat/Chat';
import Tops from './components/MainPage/Tops/Tops';
import Forecast from './components/MainPage/Forecast/Forecast';
import Authorization from './components/MainPage/Authorization/Authorization';
import TopSeries from './components/MainPage/Tops/TopSeries';
import TopFilms from './components/MainPage/Tops/TopFilms';
import TopGames from './components/MainPage/Tops/TopGames';
// import TopGames from '/components/MainPage/Tops/TopGames'

function App() {
  return (
    <>
    <NavBar/>
    <Routes>
    {/* <Route path="/reg" element={<RegPage setuserName={setuserName}/> } /> */}
      <Route path="/" element={ <Main/> }/>
      <Route path="/chat" element={ <Chat/> }/>
      <Route path="/forecast" element={ <Forecast/> }/>
      <Route path="/tops" element={ <Tops/> }/>
      <Route path="/authorization" element={ <Authorization /> }/>
      <Route path="/topgames" element={ <TopGames/> }/>
      <Route path="/topfilms" element={ <TopFilms/> }/>
      <Route path="/topseries" element={ <TopSeries/> }/>
    </Routes >
    </>
  );
}

export default App;
