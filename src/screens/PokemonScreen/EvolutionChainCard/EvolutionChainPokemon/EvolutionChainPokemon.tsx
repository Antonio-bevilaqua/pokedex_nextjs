import React from 'react'
import PokelistCard from '../../../../components/PokelistCard/PokelistCard'

const EvolutionChainPokemon = ({ pokemon, index }) => {
    return (
        <div className="w-full h-full col-span-2">
            <PokelistCard pokemon={pokemon} index={index} />
        </div>
    )
}

export default EvolutionChainPokemon