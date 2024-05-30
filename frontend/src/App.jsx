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
  const [user, setUser] = useState(null); //User state
  const [userPokemon, setUserPokemon] = useState(null); // The user's pokemon
  const [trainerPokemon, setTrainerPokemon] = useState(null); // The trainer's pokemon
  const [isSelected, setIsSelected] = useState(null); // Used for determining the trainer's pokemon

  let backgroundClass = ''; // Allows for dynamic allocation of backgrounds depending the page currently being viewed.
  location.pathname === '/login' ? backgroundClass = 'login-background' :
    location.pathname === '/register' ? backgroundClass = 'register-background' :
    location.pathname === '/pokemon-selector' ? backgroundClass = 'selector-background' :
    location.pathname === '/battle' ? backgroundClass = 'battle-background' :
    location.pathname === '/' ? backgroundClass = 'main-background' : '';

  return (
    <>
      <Nav userState={{ user, setUser }} setPokemon={{ setUserPokemon, setTrainerPokemon, setIsSelected }} />
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
