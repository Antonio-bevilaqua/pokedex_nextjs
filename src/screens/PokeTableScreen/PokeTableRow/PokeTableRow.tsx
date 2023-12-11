import React, { useEffect, useState } from 'react'
import Table from '@/components/Table/Table'
import { padLeft, idGenerator, renderData, searchSprite, getWeight, getHeight, hasGender, getFemaleGenderPercentage, getMaleGenderPercentage, ucfirst } from "@/assets/utils/functions";
import Spinner from '@/components/Spinners/Spinner';
import PokeballImage from "@/assets/images/PokeBall.webp";
import NoSprite from "@/assets/images/NoSprite.png";
import PokeballBackground from "@/assets/images/pokeballBackground.svg";
import Image from 'next/image';
import usePokemonIntegrator from '@/hooks/usePokemonIntegrator';
import PokeType from '@/components/Pokemon/PokeType/PokeType';
import "@/styles/pokemonCard/pokemonCard.css";
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMars, faNeuter, faSearch, faVenus } from '@fortawesome/free-solid-svg-icons';
import Button from "@/components/Button/Button";
import { useRouter } from 'next/navigation';

export type Pokemon = {
    name: string,
    url: string
}

type Props = {
    pokemon: Pokemon | null,
    index: number
}

const PokeTableRow = ({ pokemon, index }: Props) => {
    const router = useRouter();
    const { integrateData } = usePokemonIntegrator();
    const [data, setData] = useState(null);
    const [loaded, setLoaded] = useState(false);
    const [rendered, setRendered] = useState(false);

    const getPokeData = async () => {
        const result = await integrateData(pokemon, true);
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

    const viewPokemon = () => {
        if (data === null) return;
        router.push(`/pokemon/${data.id}`);
    }

    return (
        <Table.Tr
            className="text-gray-700 dark:text-sky-200 font-bold text-sm hover:bg-gray-400/60 hover:dark:bg-slate-800/80 hover:cursor-pointer"
            title={`Visualizar Pokemon ${ucfirst(renderData(data, "name"))}`}
            onClick={viewPokemon}
        >
            <Table.Td className="font-bold align-middle">
                #{padLeft(renderData(data, "id"), 4, "0")}
            </Table.Td>
            <Table.Td className="align-middle">
                <div className="flex flex-col items-center justify-start sm:flex-row gap-2">
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
                    <h4 className='text-md m-0 font-extrabold capitalize flex gap-2 items-center'>
                        {data === null && <Spinner type="primary" />} {renderData(data, "name", "Buscando...")}
                    </h4>
                </div>
            </Table.Td>
            <Table.Td className="min-w-[100px] align-middle">
                <div className='flex flex-wrap gap-1 mt-4'>
                    {data !== null && (
                        <>
                            {data.types.map((typeData: any, index: number) => (
                                <PokeType isIcon={true} type={typeData.type} key={`type-${idGenerator()}-${index}`} />
                            ))}
                        </>
                    )}
                </div>
            </Table.Td>
            <Table.Td className="min-w-[100px] align-middle">
                {data !== null && renderData(data, "species.genera.7.genus")}
            </Table.Td>
            <Table.Td className="min-w-[100px] align-middle">
                {data !== null && getHeight(data.height, true)}
            </Table.Td>
            <Table.Td className="min-w-[100px] align-middle">
                {data !== null && getWeight(data.weight, true)}
            </Table.Td>
            <Table.Td className="min-w-[170px] align-middle">
                {data !== null && hasGender(data.species) ? (
                    <div className="flex gap-4">
                        <span title="Feminino">
                            <FontAwesomeIcon icon={faVenus} className="text-pink-600 dark:text-pink-400" /> {getFemaleGenderPercentage(data.species)}%
                        </span>
                        <span title="Masculino">
                            <FontAwesomeIcon icon={faMars} className="text-sky-600 dark:text-sky-400" /> {getMaleGenderPercentage(data.species)}%
                        </span>
                    </div>
                ) : (
                    <>
                        <span>
                            <FontAwesomeIcon icon={faNeuter} className="text-neutral-600 dark:text-neutral-400" /> Não possui
                        </span>
                    </>
                )}
            </Table.Td>
        </Table.Tr>
    )
}

export default PokeTableRow