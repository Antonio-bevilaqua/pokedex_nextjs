import React from 'react'
import PokeType from '../../../components/PokeType/PokeType';
import Statistic from './Statistic/Statistic';
import Attributes from './Attributes/Attributes';
import {
    getFemaleGenderPercentage,
    getFlavorText,
    getHeight,
    getMaleGenderPercentage,
    getWeight,
    hasGender,
    idGenerator,
    padLeft,
    renderData
} from '../../../../assets/utils/functions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMars, faNeuter, faVenus } from '@fortawesome/free-solid-svg-icons';


const StatisticsCard = ({ pokemon }) => {
    return (
        <div>
            <div className="flex flex-col sm:flex-row sm:items-end">
                <h2 className='text-gray-700 dark:text-gray-200 text-2xl sm:text-4xl font-bold capitalize'>
                    {renderData(pokemon, "name")}
                </h2>
                <span className="text-gray-500 dark:text-sky-200 sm:pl-6 text-xl sm:text-2xl">#{padLeft(renderData(pokemon, "id"), 4, "0")}</span>
            </div>
            <Statistic className="mt-6">
                <Statistic.Title>Tipo</Statistic.Title>
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2'>
                    {pokemon.types.map((typeData: any, index: number) => (
                        <PokeType type={typeData} key={`type-${idGenerator()}-${index}`} />
                    ))}
                </div>
            </Statistic>

            <Statistic>
                <Statistic.Title>Espécie</Statistic.Title>
                <Statistic.Value>{renderData(pokemon, "species.genera.7.genus")}</Statistic.Value>
            </Statistic>

            <Statistic>
                <Statistic.Title>Altura</Statistic.Title>
                <Statistic.Value>{getHeight(pokemon.height)}</Statistic.Value>
            </Statistic>

            <Statistic>
                <Statistic.Title>Peso</Statistic.Title>
                <Statistic.Value>{getWeight(pokemon.weight)}</Statistic.Value>
            </Statistic>

            <Statistic>
                <Statistic.Title>Gênero</Statistic.Title>
                <Statistic.Value>
                    {hasGender(pokemon.species) ? (
                        <div className="flex gap-4">
                            <span title="Feminino">
                                <FontAwesomeIcon icon={faVenus} className="text-pink-600 dark:text-pink-400" /> {getFemaleGenderPercentage(pokemon.species)}%
                            </span>
                            <span title="Masculino">
                                <FontAwesomeIcon icon={faMars} className="text-sky-600 dark:text-sky-400" /> {getMaleGenderPercentage(pokemon.species)}%
                            </span>
                        </div>
                    ) : (
                        <>
                            <span>
                                <FontAwesomeIcon icon={faNeuter} className="text-neutral-600 dark:text-neutral-400" /> Não possui
                            </span>
                        </>
                    )}
                </Statistic.Value>
            </Statistic>

            <Statistic>
                <Statistic.Value>{getFlavorText(pokemon.species.flavor_text_entries)}</Statistic.Value>
            </Statistic>

            <Statistic />
            <Attributes stats={pokemon.stats} />
        </div>
    )
}

export default StatisticsCard