import React, {useState} from 'react'
import HpBar from './HpBar';

const Pokemon = ({pokemon, isUser}) => {
    const [hp, setHp] = useState(pokemon.stats[0].base_stat);
    return(
        <div>
            {isUser ? (
                <div className="user">
                    <div className="userContainer">
                        <img src={pokemon.sprites.versions["generation-iii"]["firered-leafgreen"].back_default} alt="" />
                        <div className="userAttributes">
                            <div className='name-lvl'>
                                <div className="name">{pokemon.name.toUpperCase()}</div>
                                <div className="lvl">Lv5</div>
                            </div>
                            <div className="hpbar"><HpBar hp={hp}/></div>
                            <div className="hp-value">{hp}/{pokemon.stats[0].base_stat}</div>
                        </div>
                    </div>
                </div>
            ) : (
                <div className="trainer">
                    <div className="trainerContainer">
                        <div className="trainerAttributes">
                            <div className='name-lvl'>
                                <div className="name">{pokemon.name.toUpperCase()}</div>
                                <div className="lvl">Lv5</div>
                            </div>
                            <div className="hpbar"><HpBar hp={hp}/></div>
                        </div>
                        <img src={pokemon.sprites.versions["generation-iii"]["firered-leafgreen"].front_default} alt="" />
                    </div>
                </div>    
            )}
        </div>
    )
}

export default Pokemon