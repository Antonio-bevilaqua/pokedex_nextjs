import React, { useContext, useEffect, useState } from 'react'
import { PokemonContext } from '../../contexts/PokemonListContext';
import PokelistCard from '../../components/PokelistCard/PokelistCard';
import PokelistSortButtons from '../PokelistScreen/PokelistSortButtons';
import Pagination from '../../components/Pagination/Pagination';
import PokeTableRow from './PokeTableRow/PokeTableRow';
import Table from '../../components/Table/Table';

const PokeTableScreen = ({ params }) => {
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
                <div className='p-4'>
                    <Table>
                        {pokemonList.map((pokemon, index) => (
                            <PokeTableRow pokemon={pokemon} key={`poke_not_loaded_${index}`} index={index} />
                        ))}
                    </Table>
                </div>
            </div>
        );
    }

    return (
        <div>
            <PokelistSortButtons />
            <Pagination endpoint="/tabela/" className="w-full justify-center mt-4" actualPage={page} />
            <div className='p-4 w-full'>
                <Table className="table-fixed">
                    {pokemonList.map((pokemon, index) => (
                        <PokeTableRow pokemon={pokemon} key={`poke${pokemon.id}`} index={index} />
                    ))}
                </Table>
            </div>
            <Pagination endpoint="/tabela/" className="w-full justify-center" actualPage={page} />
        </div>
    )
}

export default PokeTableScreen