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

  let backgroundClass = '';
  location.pathname === '/login' ? backgroundClass = 'login-background' :
    location.pathname === '/register' ? backgroundClass = 'register-background' :
    location.pathname === '/' ? backgroundClass = 'main-background' : '';

  return (
    <>
      <Nav userState={{user, setUser}}/>
      <Routes>
        <Route path="/" element={<Main user={user}/>} />
        <Route path="/battle" element={<Battle user={user}/>} />
        <Route path="/pokemon-selector" element={<PokemonSelector user={user}/>} />
        <Route path="/login" element={<Login setUser={setUser}/>} />
        <Route path="/register" element={<Register/>} />
      </Routes>

      <div className={backgroundClass}></div>
    </>
  )
}

export default App
