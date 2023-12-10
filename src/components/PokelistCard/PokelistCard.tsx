import React, { useContext, useEffect, useState } from 'react'
import usePokemonIntegrator from '../../hooks/usePokemonIntegrator';
import Spinner from '../Spinners/Spinner';
import PokeballImage from "../../../assets/images/PokeBall.webp";
import PokeballBackground from "../../../assets/images/pokeballBackground.svg";
import Image from 'next/image';
import { PokemonContext } from '../../contexts/PokemonListContext';
import { padLeft, idGenerator, renderData } from "../../../assets/utils/functions";
import { backgrounds } from "../PokeType/typeUtils";
import PokeType from '../PokeType/PokeType';
import "./pokelistCard.css";
import Link from 'next/link';

export type Pokemon = {
    name: string,
    url: string
}

type Props = {
    pokemon: Pokemon | null,
    index: number
}

const PokelistCard = ({ pokemon, index }: Props) => {
    const { integrateData } = usePokemonIntegrator();
    const { limit } = useContext(PokemonContext);
    const [data, setData] = useState(null);

    const getPokeData = async () => {
        const result = await integrateData(pokemon);
        setData(result);
    }

    useEffect(() => {
        if (pokemon !== null) {
            getPokeData();
        }
    }, [pokemon]);

    const getSprite = () => {
        const sprite = renderData(data, "sprites.other.official-artwork.front_default");
        if (sprite !== "") return sprite;
        return PokeballImage.src;
    }

    const getDelay = () => {
        let divider = Math.floor(index / limit);
        let subtractor = divider * limit;
        let actualIndex = index - subtractor;
        return actualIndex * 30;
    }


    return (
        <Link href={data !== null ? `/pokemon/${data.id}` : `#`}>
            <div className="flex justify-center hover:scale-105 cursor-pointer transition-all origin-center">
                <div className={`flex flex-col p-4 items-center max-w-sm shadow-md shadow-gray-400 dark:shadow-none rounded-lg transition-all ease-in-out
                ${data === null ? "bg-gray-300 dark:bg-gray-900" : backgrounds["default"]}
            `}
                    style={{
                        animationDelay: `${getDelay()}ms`,
                    }}>
                    <h4 className='text-gray-700 dark:text-gray-400 text-xl pb-4 w-full font-extrabold capitalize flex gap-2 items-center'>
                        {data === null && <Spinner type="primary" />} {renderData(data, "name", "Buscando...")}
                    </h4>
                    <div className="relative w-full rounded-lg bg-gray-500 dark:bg-gray-700 overflow-hidden max-w-sm">
                        <Image alt="" src={PokeballBackground} className="absolute top-0 left-0 opacity-20 w-2/3 z-0" />
                        <img src={PokeballImage.src} className={`relative max-w-100 z-10 ${data === null ? "pokeballSpin" : "pokeballHide"}`} />
                        {data !== null && <img src={getSprite()} className={`absolute top-0 left-0 max-w-100 z-20 pokemonShow`} />}
                    </div>
                    <div className="relative w-full p-3">
                        <span className="font-bold text-gray-700 dark:text-gray-400">#{padLeft(renderData(data, "id"), 4, "0")}</span>
                        <div className='grid grid-cols-1 sm:grid-cols-2 gap-2 mt-4'>
                            {data !== null && (
                                <>
                                    {data.types.map((typeData: any, index: number) => (
                                        <PokeType type={typeData.type} key={`type-${idGenerator()}-${index}`} />
                                    ))}
                                </>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default PokelistCard