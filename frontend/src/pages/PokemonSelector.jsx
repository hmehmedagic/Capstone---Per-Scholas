import React, { useState, useEffect } from 'react'
import Pokemon from '../components/Pokemon'

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
    // <div className="dummyContainer">
    //   <div className='pokeSelector-container'>
    //     <div className='bulbasaur'>
    //       <Pokemon user={user} pokemon={pokemon[0]} trainer={pokemon[1]} setUserPokemon={setUserPokemon} setTrainerPokemon={setTrainerPokemon} isSelected={isSelected} setIsSelectred={setIsSelected}/>
    //     </div>
    //     <div className="charmander">
    //       <Pokemon user={user} pokemon={pokemon[1]} trainer={pokemon[2]} setUserPokemon={setUserPokemon} setTrainerPokemon={setTrainerPokemon} isSelected={isSelected} setIsSelectred={setIsSelected}/>
    //     </div>
    //     <div className="squirtle">
    //       <Pokemon user={user} pokemon={pokemon[2]} trainer={pokemon[0]} setUserPokemon={setUserPokemon} setTrainerPokemon={setTrainerPokemon} isSelected={isSelected} setIsSelectred={setIsSelected}/>
    //     </div>
    //   </div>
    // </div>

    <div className="dummyContainer">
      <div className='pokeSelector-container'>
        {pokemon.map((poke, index) => (
          <div key={index} className={`pokemon-${index}`}>
            <Pokemon
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