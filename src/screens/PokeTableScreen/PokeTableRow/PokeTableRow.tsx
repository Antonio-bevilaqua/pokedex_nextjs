import React, { useEffect, useState } from 'react'
import Table from '../../../components/Table/Table'
import { padLeft, idGenerator, renderData, searchSprite } from "../../../../assets/utils/functions";
import Spinner from '../../../components/Spinners/Spinner';
import PokeballImage from "../../../../assets/images/PokeBall.webp";
import NoSprite from "../../../../assets/images/NoSprite.png";
import PokeballBackground from "../../../../assets/images/pokeballBackground.svg";
import Image from 'next/image';
import usePokemonIntegrator from '../../../hooks/usePokemonIntegrator';
import PokeType from '../../../components/PokeType/PokeType';
import "../../../components/PokelistCard/pokelistCard.css";
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

export type Pokemon = {
    name: string,
    url: string
}

type Props = {
    pokemon: Pokemon | null,
    index: number
}

const PokeTableRow = ({ pokemon, index }: Props) => {
    const { integrateData } = usePokemonIntegrator();
    const [data, setData] = useState(null);
    const [loaded, setLoaded] = useState(false);
    const [rendered, setRendered] = useState(false);

    const getPokeData = async () => {
        const result = await integrateData(pokemon);
        setData(result);
    }

    useEffect(() => {
        setRendered(false);
        setData(null);
        if (pokemon !== null) {
            getPokeData();
        }
    }, [pokemon]);

    const getSprite = () => {
        let sprite = searchSprite(data);
        if (sprite === null) {
            return NoSprite.src;
        }
        return sprite;
    }

    useEffect(() => {
        const timeout = setTimeout(() => {
            setRendered((data !== null));
        }, 300);

        return () => {
            clearTimeout(timeout);
        }
    }, [data]);

    return (
        <Table.Tr>
            <Table.Td>
                #{padLeft(renderData(data, "id"), 4, "0")}
            </Table.Td>
            <Table.Td>
                <div className="flex flex-col items-center justify-center sm:flex-row gap-2">
                    <div className="relative flex justify-center items-center rounded-lg overflow-hidden">
                        <Image alt="" src={PokeballBackground} className="absolute max-h-14 top-0 left-50% opacity-20 z-0" />
                        <img src={PokeballImage.src} className={`relative max-h-14 z-10 ${data === null || !loaded || !rendered ? "pokeballSpin" : "pokeballHide"}`} />
                        {data !== null && (
                            <img
                                src={getSprite()}
                                onLoad={() => setLoaded(true)}
                                className={`absolute max-h-14 ${loaded && rendered ? "pokemonShow z-20" : "-z-10"}`}
                            />
                        )}
                    </div>
                    <h4 className='text-gray-700 dark:text-sky-200 text-xl m-0 font-extrabold capitalize flex gap-2 items-center'>
                        {data === null && <Spinner type="primary" />} {renderData(data, "name", "Buscando...")}
                    </h4>
                </div>
            </Table.Td>
            <Table.Td className="min-w-[100px]">
                <div className='grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-2 mt-4'>
                    {data !== null && (
                        <>
                            {data.types.map((typeData: any, index: number) => (
                                <PokeType type={typeData.type} key={`type-${idGenerator()}-${index}`} />
                            ))}
                        </>
                    )}
                </div>
            </Table.Td>
            <Table.Td className="min-w-[50px]">

                {data !== null && (
                    <Link href={`/pokemon/${data.id}`} className="bg-gray-300 dark:bg-gray-800 border-gray-700 text-gray-700 dark:border-sky-200 dark:text-sky-200 hover:opacity-80 p-3 rounded-md border-2 border-solid">
                        <FontAwesomeIcon icon={faSearch} />
                    </Link>)
                }
            </Table.Td>
        </Table.Tr>
    )
}

export default PokeTableRow