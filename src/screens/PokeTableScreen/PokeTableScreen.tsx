import React, { useContext, useEffect, useState } from 'react'
import { PokemonContext } from '@/contexts/PokemonListContext';
import PokelistCard from '@/components/Pokemon/PokemonCard/PokemonCard';
import PokelistSortButtons from '@/components/Pokemon/SortButtons/PokelistSortButtons';
import Pagination from '@/components/Pagination/Pagination';
import PokeTableRow from './PokeTableRow/PokeTableRow';
import Table from '@/components/Table/Table';
import Footer from '@/src/components/Footer/Footer';

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
                        <tbody>
                            {pokemonList.map((pokemon, index) => (
                                <PokeTableRow pokemon={pokemon} key={`poke_not_loaded_${index}`} index={index} />
                            ))}
                        </tbody>
                    </Table>
                </div>
            </div>
        );
    }

    return (
        <div>
            <title>PokéDB | Tabela</title>
            <PokelistSortButtons />
            <div className='p-4 w-full'>
                <Table className="table-fixed">
                    <thead>
                        <Table.Tr className="font-bold text-md text-gray-700 dark:text-sky-200">
                            <Table.Th>ID</Table.Th>
                            <Table.Th>Nome</Table.Th>
                            <Table.Th>Tipos</Table.Th>
                            <Table.Th>Espécie</Table.Th>
                            <Table.Th>Altura</Table.Th>
                            <Table.Th>Peso</Table.Th>
                            <Table.Th>Gênero</Table.Th>
                        </Table.Tr>
                    </thead>
                    <tbody>
                        {pokemonList.map((pokemon, index) => (
                            <PokeTableRow pokemon={pokemon} key={`poke${pokemon.id}`} index={index} />
                        ))}
                    </tbody>
                </Table>
            </div>
            <Footer>
                <Pagination endpoint="/tabela/" className="w-full justify-center" actualPage={page} />
            </Footer>
        </div>
    )
}

export default PokeTableScreen