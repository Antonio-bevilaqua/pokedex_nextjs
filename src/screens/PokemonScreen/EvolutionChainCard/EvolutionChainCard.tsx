import React, { Fragment, useEffect, useState } from 'react'
import usePokemonIntegrator from '@/hooks/usePokemonIntegrator'
import EvolutionChainPokemon from './EvolutionChainPokemon/EvolutionChainPokemon';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDownLong, faArrowRight, faArrowRightLong } from '@fortawesome/free-solid-svg-icons';

const EvolutionChainCard = ({ pokemon }) => {
    const { getEvolutionChain } = usePokemonIntegrator();
    const [pokemons, setPokemons] = useState(null);

    const fetchChain = async () => {
        const data = await getEvolutionChain(pokemon.species.evolution_chain.url);
        setPokemons(data);
    }

    useEffect(() => {
        fetchChain();
    }, []);

    if (pokemons === null) {
        return <></>
    }

    return (
        <>
            <div className="hidden lg:grid grid-flow-col auto-cols-fr gap-2 w-full mt-2">
                {pokemons.map((pokemon: any, index: number) => (
                    <Fragment key={`desktop_evo_pokemons_${index}`}>
                        {index > 0 && (
                            <div className="flex flex-col justify-center items-center text-gray-600 dark:text-gray-200">
                                <FontAwesomeIcon icon={faArrowRightLong} className="text-5xl" />
                                Nível {pokemon.evolution_details.min_level}
                            </div>
                        )}
                        <EvolutionChainPokemon pokemon={pokemon} index={pokemon.id - 1} key={`evolution_pokemon_${pokemon.id}`} />
                    </Fragment>
                ))}
            </div>
            <div className="grid lg:hidden grid-cols-1 gap-2 w-full mt-2">
                {pokemons.map((pokemon: any, index: number) => (
                    <Fragment key={`mobile_evo_pokemons_${index}`}>
                        {index > 0 && (
                            <div className="flex justify-center items-center gap-3 text-gray-600 dark:text-gray-200">
                                <FontAwesomeIcon icon={faArrowDownLong} className="text-5xl" />
                                Nível {pokemon.evolution_details.min_level}
                            </div>
                        )}
                        <EvolutionChainPokemon pokemon={pokemon} index={pokemon.id - 1} key={`evolution_pokemon_${pokemon.id}`} />
                    </Fragment>
                ))}
            </div>
        </>
    )
}

export default EvolutionChainCard