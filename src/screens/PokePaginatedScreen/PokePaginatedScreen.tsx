import React, { useContext, useEffect, useState } from 'react'
import { PokemonContext } from '../../contexts/PokemonListContext';
import PokelistCard from '../../components/PokelistCard/PokelistCard';
import PokelistSortButtons from '../PokelistScreen/PokelistSortButtons';
import Pagination from '../../components/Pagination/Pagination';

const PokePaginatedScreen = ({ params }) => {
    const page = parseInt(params.pagina);
    const { pokemonList, limit, loadPage } = useContext(PokemonContext);

    const generateInitialList = () => {
        let arr = [];
        for (let i = 0; i < limit; i++) {
            arr.push(null);
        }
        return arr;
    }

    const initialList = generateInitialList();

    useEffect(() => {
        loadPage(page);
    }, []);

    if (pokemonList.length === 0) {
        return (
            <div>
                <PokelistSortButtons />
                <div className='grid grid-cols-1 lg:grid-cols-4 gap-4 p-4'>
                    {initialList.map((nullable, index) => (
                        <PokelistCard pokemon={nullable} key={`poke${index}`} index={index} />
                    ))}
                </div>
            </div>
        );
    }

    return (
        <div>
            <PokelistSortButtons />
            <Pagination className="w-full justify-center" actualPage={page} />
            <div className='grid grid-cols-1 lg:grid-cols-4 gap-4 p-4'>
                {pokemonList.map((pokemon, index) => (
                    <PokelistCard pokemon={pokemon} key={`poke${index}`} index={index} />
                ))}
            </div>
            <Pagination className="w-full justify-center" actualPage={page} />
        </div>
    )
}

export default PokePaginatedScreen