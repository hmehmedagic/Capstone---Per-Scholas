import { useState} from 'react'
import { Route, Routes, useLocation } from "react-router-dom";
import Nav from './components/Nav'
import Main from './pages/Main'
import Battle from './pages/Battle'
import PokemonSelector from './pages/PokemonSelector';
import Login from './pages/Login';
import Register from './pages/Register'

import './App.css'

function App() {
  const location = useLocation();
  const [user, setUser] = useState(null);
  const [userPokemon, setUserPokemon] = useState(null);
  const [trainerPokemon, setTrainerPokemon] = useState(null);
  const [isSelected, setIsSelected] = useState(null);

  let backgroundClass = '';
  location.pathname === '/login' ? backgroundClass = 'login-background' :
    location.pathname === '/register' ? backgroundClass = 'register-background' :
    location.pathname === '/pokemon-selector' ? backgroundClass = 'selector-background' :
    location.pathname === '/' ? backgroundClass = 'main-background' : '';

  return (
    <>
      <Nav userState={{user, setUser}}/>
      <Routes>
        <Route path="/" element={<Main user={user} setUserPokemon={setUserPokemon} setTrainerPokemon={setTrainerPokemon} setIsSelected={setIsSelected}/>} />
        <Route path="/battle" element={<Battle user={user} userPokemon={userPokemon} trainerPokemon={trainerPokemon} />} />
        <Route path="/pokemon-selector" element={<PokemonSelector user={user} setUserPokemon={setUserPokemon} setTrainerPokemon={setTrainerPokemon} isSelected={isSelected} setIsSelected={setIsSelected}/>} />
        <Route path="/login" element={<Login setUser={setUser}/>} />
        <Route path="/register" element={<Register/>} />
      </Routes>

      <div className={backgroundClass}></div>
    </>
  )
}

export default App
