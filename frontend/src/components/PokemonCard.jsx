import React from 'react'

const Pokemon = ({user, pokemon, trainer, setUserPokemon, setTrainerPokemon, isSelected, setIsSelected, selected}) => {
  if(!pokemon) {
    return <div className='noUser'>
              <h1>Loading pokemon.</h1>
            </div>;
  }

  const handleSubmit = async () => {
    
        const res = await fetch('/api/pokemon', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                userId: user._id,
                name: pokemon.name
            }),
        });
    
        if (res.ok) {
          setUserPokemon(pokemon);
          setTrainerPokemon(trainer);
          switch(pokemon.name) {
            case 'bulbasaur':
              setIsSelected([true, false, false]);
              break;
            case 'charmander':
              setIsSelected([false, true, false]);
              break;
            default:
              setIsSelected([false, false, true]);
          }
        } else {
            const errorData = await res.json();
            console.error('Error adding Pokemon:', errorData.error);
            window.alert(`Failed to add Pokemon: ${errorData.error}`);
        }
  }

  const handleRemove = async () => {
    const res = await fetch(`/api/pokemon/${user._id}`, {
      method: 'DELETE',
      headers: {
          'Content-Type': 'application/json',
      },
    });

    if(res.ok) {
      setUserPokemon(null);
      setTrainerPokemon(null);
      setIsSelected(null);
    }
  }

  const handleUpdate = async () => {
    const res = await fetch(`/api/pokemon/${user._id}`, {
      method: 'PUT',
      headers: {
          'Content-Type': 'application/json',
      },
      body: JSON.stringify({
          userId: user._id,
          name: pokemon.name
      }),
    });

    if (res.ok) {
      setUserPokemon(pokemon);
      setTrainerPokemon(trainer);
      switch(pokemon.name) {
        case 'bulbasaur':
          setIsSelected([true, false, false]);
          break;
        case 'charmander':
          setIsSelected([false, true, false]);
          break;
        default:
          setIsSelected([false, false, true]);
      }
    } else {
        const errorData = await res.json();
        console.error('Error adding Pokemon:', errorData.error);
        window.alert(`Failed to add Pokemon: ${errorData.error}`);
    }
  }

  let borderColor = '';
  let textColor = '';

  switch(pokemon.name) {
    case 'bulbasaur':
      textColor = '#5D8D95';
      borderColor = '#A6E159';
      break;
    case 'charmander':
      textColor = '#D84848';
      borderColor = '#F8A008';
      break;
    default:
      textColor = '#8090A8';
      borderColor = '#B0D8E8';
  }

  return (
    <div className='poke-container' style={{ border: `4px solid ${borderColor}`, color: `${textColor}` }}>
      <h1>{pokemon.name}</h1>
      <h2>{pokemon.types[0].type.name}</h2>
      <img src={pokemon.sprites.versions["generation-iii"]["firered-leafgreen"].front_default} alt="" />
      <div className="moveStats">
        <div className="moveList">
          <h3>Moves:</h3>
          {pokemon.name === 'bulbasaur' ? (<p>{pokemon.moves[6].move.name}</p>) :
            pokemon.name === 'charmander' ? (<p>{pokemon.moves[3].move.name}</p>) : (<p>{pokemon.moves[4].move.name}</p>)}
          
          {pokemon.name === 'bulbasaur' ? (<p>{pokemon.moves[10].move.name}</p>) :
            pokemon.name === 'charmander' ? (<p>{pokemon.moves[14].move.name}</p>) : (<p>{pokemon.moves[8].move.name}</p>)}
        </div>
        <div className="stats">
          <h3>Stats:</h3>
          <div className="stat-container">
            <p>hp: <span>{pokemon.stats[0].base_stat}</span></p>
          </div>
          <div className="stat-container">
            <p>atk: <span>{pokemon.stats[1].base_stat}</span></p>
          </div>
          <div className="stat-container">
            <p>def: <span>{pokemon.stats[2].base_stat}</span></p>
          </div>
          <div className="stat-container">
            <p>sp-atk: <span>{pokemon.stats[3].base_stat}</span></p>
          </div>
          <div className="stat-container">
            <p>sp-def: <span>{pokemon.stats[4].base_stat}</span></p>
          </div>
          <div className="stat-container">
            <p>sp: <span>{pokemon.stats[5].base_stat}</span></p>
          </div>
        </div>
      </div>
      {isSelected ? (
        selected ? (
          <button className='storePokemon' onClick={handleRemove}>
            Remove From Party
          </button>
        ) : (
          <button className='storePokemon' onClick={handleUpdate}>
            Change Pokemon
          </button>
        )
      ) : (
        <button className='storePokemon' onClick={handleSubmit}>
          I Choose You
        </button>
      )}
    </div>
  )
}

export default Pokemon