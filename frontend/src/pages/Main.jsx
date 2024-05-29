import React, {useEffect} from 'react'

const Main = ({user, setUserPokemon, setTrainerPokemon, setIsSelected}) => {
  if(!user) {
    return <div className='noUser'>
              <h1>Please log in first then head over to Choose Your Pokemon to select your pokemon.</h1>
            </div>;
  }

  const BASEURL = "https://pokeapi.co/api/v2/pokemon/"

  const loadPokemon = async () => {
    if(user) {
      const res = await fetch(`/api/pokemon/${user._id}`, {
        method: 'GET',
        headers: {
            // 'Authorization': 'Bearer' + localStorage.getItem('token'),
            'Content-Type': 'application/json',
        },
      });

      if (res.ok) {
        let userPokemonName = await res.json();
        console.log("user Pokemon: " + userPokemonName);
        let trainerPokemonName;
        switch(userPokemonName) {
            case 'bulbasaur':
              trainerPokemonName = 'charmander';
              setIsSelected([true, false, false]);
              break;
            case 'charmander':
              trainerPokemonName = 'squirtle';
              setIsSelected([false, true, false]);
              break;
            default:
              trainerPokemonName = 'bulbasaur';
              setIsSelected([false, false, true]);
        }
        try {
          const resUser = await fetch(BASEURL + userPokemonName);
          if (!res.ok) {
              throw new Error('Failed to fetch user pokemon data');
          }
          const userPokemon = await resUser.json();
    
          const resTrainer = await fetch(BASEURL + trainerPokemonName);
          if (!resTrainer.ok) {
              throw new Error('Failed to fetch user pokemon data');
          }
          const trainerPokemon = await resTrainer.json();
        setUserPokemon(userPokemon);
        setTrainerPokemon(trainerPokemon);
        } catch (error) {
          console.error('Error fetching pokemon data:', error);
        }
      }
    }
  }

  useEffect(() => {
    loadPokemon();
  }, []);

  return (
    <div className='noUser'>
      <h1>Pokemon data loaded. Head over to battle if you are ready.</h1>
    </div>
  )
}

export default Main