import React, { useState, useEffect } from 'react'
import PokemonCard from '../components/PokemonCard'

const PokemonSelector = ({user, setUserPokemon, setTrainerPokemon, isSelected, setIsSelected}) => {
  if(!user) {
    return <div className='noUser'>
              <h1>Please log in before attempting this option.</h1>
            </div>;
  }
  const [pokemon, setPokemon] = useState([]);
  const BASEURL = "https://pokeapi.co/api/v2/pokemon/"

  const getPokemon = async () => {
    try {
      const res = await fetch(BASEURL + `bulbasaur`);
      //tackle & growl
      if (!res.ok) {
          throw new Error('Failed to fetch user pokemon data');
      }
      const data = await res.json();

      const res2 = await fetch(BASEURL + `charmander`);
      //scratch & growl
      if (!res2.ok) {
          throw new Error('Failed to fetch user pokemon data');
      }
      const data2 = await res2.json();

      const res3 = await fetch(BASEURL + `squirtle`);
      //tackle & tailwhip
      if(!res3.ok) {
        throw new Error('Failed to fetch trainer pokemon data');
      }
      const data3 = await res3.json();
      setPokemon([data, data2, data3]);
    } catch (error) {
        console.error('Error fetching pokemon data:', error);
    }
  }
  useEffect(() => {
    getPokemon();
  }, []);

  return (
    <div className="dummyContainer">
      <div className='pokeSelector-container'>
        {pokemon.map((poke, index) => (
          <div key={index} className={`pokemon-${index}`}>
            <PokemonCard
              user={user}
              pokemon={poke}
              trainer={pokemon[(index + 1) % 3]}
              setUserPokemon={setUserPokemon}
              setTrainerPokemon={setTrainerPokemon}
              isSelected={isSelected}
              setIsSelected={setIsSelected}
              selected={isSelected ? isSelected[index] : undefined}
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default PokemonSelector