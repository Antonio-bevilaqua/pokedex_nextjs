"use client";

import React, { useContext, useEffect, useState } from 'react'
import usePokemonIntegrator from '@/hooks/usePokemonIntegrator';
import { searchSprite } from '@/assets/utils/functions';
import DamageRelations from './DamageRelations/DamageRelations';
import StatisticsCard from './StatisticsCard/StatisticsCard';
import EvolutionChainCard from './EvolutionChainCard/EvolutionChainCard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import NoSprite from "@/assets/images/NoSprite.png";
import { useRouter } from 'next/navigation';
import ThemeContext from '@/src/contexts/ThemeContext';

const PokemonScreen = ({ params }) => {
    const router = useRouter()
    const id = params.id;
    const { setReady } = useContext(ThemeContext);
    const [pokemon, setPokemon] = useState(null);
    const { getPokemonById } = usePokemonIntegrator();

    const fetchData = async () => {
        setReady(false);
        const data = await getPokemonById(id);
        setPokemon(data);
        setReady(true);
    }

    useEffect(() => {
        fetchData();
    }, []);

    const getSprite = () => {
        let sprite = searchSprite(pokemon);
        if (sprite === null) {
            return NoSprite.src;
        }
        return sprite;
    }


    const goBack = () => {
        router.back();
    }


    if (!pokemon) {
        return null;
    }

    return (
        <>
            <div className='pt-4 pl-4'>
                <a href="#" onClick={() => goBack()} className="text-sky-600 dark:text-sky-200 transition-opacity hover:opacity-70 text-md font-bold">
                    <FontAwesomeIcon icon={faArrowLeft} /> Voltar à Lista
                </a>
            </div>
            <div className="p-4 pt-2 grid gap-8 grid-cols-1 lg:grid-cols-2">
                <div className="bg-gray-400 dark:bg-gray-600 rounded-xl flex justify-center items-center">
                    <img src={getSprite()} />
                </div>
                <StatisticsCard pokemon={pokemon} />
            </div>
            <div className="p-4 mt-4 grid gap-8 grid-cols-1 sm:grid-cols-2 border-solid border-t-2 border-gray-600 dark:border-sky-200">
                <div>
                    <div className="flex flex-col sm:flex-row items-end">
                        <h2 className='text-gray-700 dark:text-gray-200 text-lg sm:text-xl font-bold capitalize'>
                            Dano por tipos
                        </h2>
                    </div>

                    <div className='mt-2 grid grid-cols-2 xl:grid-cols-3 gap-2'>
                        <DamageRelations types={pokemon.types} relation="damage" />
                    </div>
                </div>
                <div>
                    <div className="flex flex-col sm:flex-row items-end">
                        <h2 className='text-gray-700 dark:text-gray-200 text-lg sm:text-xl font-bold capitalize'>
                            Defesa por tipos
                        </h2>
                    </div>

                    <div className='mt-2 grid grid-cols-2 xl:grid-cols-3 gap-2'>
                        <DamageRelations types={pokemon.types} relation="defense" />
                    </div>
                </div>
            </div>
            <div className="p-4 mt-8 border-solid border-t-2 border-gray-600 dark:border-sky-200 grid grid-cols-1">
                <div className="flex flex-col sm:flex-row items-end">
                    <h2 className='text-gray-700 dark:text-gray-200 text-lg sm:text-xl font-bold capitalize'>
                        Cadeia Evolutiva
                    </h2>
                </div>

                <EvolutionChainCard pokemon={pokemon} />
            </div>
        </>
    )
}

export default PokemonScreen