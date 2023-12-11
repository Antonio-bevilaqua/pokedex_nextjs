import React, { useContext, useEffect } from 'react'
import { PokemonContext } from '../../contexts/PokemonListContext';
import PokelistCard from '../../components/PokelistCard/PokelistCard';
import useScrollTracker from '../../hooks/useScrollTracker';
import PokelistSortButtons from './PokelistSortButtons';

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

    useEffect(() => {
        loadMore();
    }, []);

    if (pokemonList.length === 0) {
        return (
            <div>
                <PokelistSortButtons />
                <div className='grid grid-cols-1 lg:grid-cols-4 gap-4 p-4'>
                    {initialList.map((nullable, index) => (
                        <PokelistCard pokemon={nullable} key={`poke_list_not_loaded_${index}`} index={index} />
                    ))}
                </div>
            </div>
        );
    }

    return (
        <div>
            <PokelistSortButtons />
            <div className='grid grid-cols-1 lg:grid-cols-4 gap-4 p-4'>
                {pokemonList.map((pokemon, index) => (
                    <PokelistCard pokemon={pokemon} key={`poke_list_${pokemon.id}`} index={index} />
                ))}
            </div>
        </div>
    )
}

export default PokeListScreen