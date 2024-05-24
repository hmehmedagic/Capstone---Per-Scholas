import React, {useState, useEffect} from 'react'
import Menu from '../components/Menu';

const Battle = () => {
  const [userPokemon, setUserPokemon] = useState(null);
  const [trainerPokemon, setTrainerPokemon] = useState(null);
  const BASEURL = "https://pokeapi.co/api/v2/"

  const getPokemon = async () => {
    try {
      const res = await fetch(BASEURL + `pokemon/charmander`);
      //scratch & growl
      if (!res.ok) {
          throw new Error('Failed to fetch user pokemon data');
      }
      const data = await res.json();
      setUserPokemon(data);

      const res2 = await fetch(BASEURL + `pokemon/squirtle`);
      //tackle & tailwhip
      if(!res2.ok) {
        throw new Error('Failed to fetch trainer pokemon data');
      }
      const data2 = await res2.json();
      setTrainerPokemon(data2);
    } catch (error) {
        console.error('Error fetching pokemon data:', error);
    }
  }
  useEffect(() => {
    getPokemon();
  }, [userPokemon, trainerPokemon]);

  return (
    trainerPokemon && userPokemon ? (
      <div className="dummy">
        <div className="arena">
          <div className='trainer'>
            <img src={trainerPokemon.sprites.versions["generation-iii"]["firered-leafgreen"].front_default} alt="" />
          </div>
          <div className='user'>
            <img src={userPokemon.sprites.versions["generation-iii"]["firered-leafgreen"].back_default} alt="" />
          </div>
        </div>
        <Menu/>
      </div>
    ) : (
      <div>
        Unable to load Pokemon data
      </div>
    )
  )
}

export default Battle