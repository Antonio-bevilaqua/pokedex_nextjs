import React, { useContext, useEffect } from 'react'
import { PokemonContext } from '@/contexts/PokemonListContext';
import PokelistCard from '@/components/Pokemon/PokemonCard/PokemonCard';
import PokelistSortButtons from '@/components/Pokemon/SortButtons/PokelistSortButtons';
import Pagination from '@/components/Pagination/Pagination';
import Footer from '@/src/components/Footer/Footer';

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
                        <PokelistCard pokemon={nullable} key={`poke_paginated_not_loaded_${index}`} index={index} />
                    ))}
                </div>
            </div>
        );
    }

    return (
        <div>
            <title>PokéDB | Paginado</title>
            <PokelistSortButtons />
            <div className='grid grid-cols-1 lg:grid-cols-4 gap-4 p-4'>
                {pokemonList.map((pokemon, index) => (
                    <PokelistCard pokemon={pokemon} key={`poke_paginated_${pokemon.id}`} index={index} />
                ))}
            </div>
            <Footer>
                <Pagination endpoint="/paginados/" className="w-full justify-center" actualPage={page} />
            </Footer>
        </div>
    )
}

export default PokePaginatedScreen