import { useState } from 'react'
import { Route, Routes } from "react-router-dom";
import Nav from './components/Nav'
import Main from './pages/Main'
import Battle from './pages/Battle'
import PokemonSelector from './pages/PokemonSelector';
import About from './pages/About';

import './App.css'

function App() {

  return (
    <>
      <Nav/>
      <Routes>
        <Route path="/" element={<Main/>} />
        <Route path="/battle" element={<Battle/>} />
        <Route path="/pokemon-selector" element={<PokemonSelector/>} />
        <Route path="/about" element={<About/>} />
      </Routes>
    </>
  )
}

export default App
