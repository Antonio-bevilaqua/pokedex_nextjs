import React, { useContext, useEffect } from 'react'
import { PokemonContext } from '../../contexts/PokemonListContext';
import PokelistCard from '../../components/PokelistCard/PokelistCard';
import useScrollTracker from '../../hooks/useScrollTracker';

const PokeListScreen = () => {
    const { loadMore, pokemonList, limit } = useContext(PokemonContext);
    const { scrollPosition, getTotalScrollHeight } = useScrollTracker();

    const generateInitialList = () => {
        let arr = [];
        for (let i = 0; i < limit; i++) {
            arr.push(null);
        }
        return arr;
    }

    const initialList = generateInitialList();

    useEffect(() => {
        if (scrollPosition >= getTotalScrollHeight() - 200) {
            loadMore();
        }
    }, [scrollPosition]);

    if (pokemonList.length === 0) {
        return (
            <div className='grid grid-cols-1 lg:grid-cols-4 gap-4 p-4'>
                {initialList.map((nullable, index) => (
                    <PokelistCard pokemon={nullable} key={`poke${index}`} index={index} />
                ))}
            </div>
        );
    }

    return (
        <div className='grid grid-cols-1 lg:grid-cols-4 gap-4 p-4'>
            {pokemonList.map((pokemon, index) => (
                <PokelistCard pokemon={pokemon} key={`poke${index}`} index={index} />
            ))}
        </div>
    )
}

export default PokeListScreen