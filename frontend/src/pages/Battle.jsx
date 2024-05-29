import React, {useState, useEffect} from 'react'
import Menu from '../components/Menu';
import Pokemon from '../components/Pokemon';

const Battle = ({userPokemon, trainerPokemon}) => {

  return (
    trainerPokemon && userPokemon ? (
      <div className="dummy">
        <div className="arena">
            <Pokemon pokemon={trainerPokemon} isUser={false}/>
            <Pokemon pokemon={userPokemon} isUser={true}/>
        </div>
        <Menu pokemon={userPokemon}/>
      </div>
    ) : (
      <div className='noUser'>
        <h1>Please log in first then head over to Choose Your Pokemon to select your pokemon.</h1>
      </div>
    )
  )
}

export default Battle